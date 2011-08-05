#!/usr/bin/php
<?php
$gridPath = __DIR__;
$pathlen = strlen($gridPath);

/**
 * Build Path Settings
 */
$encoding = 'euc-kr';
$binPath = "$gridPath/bin";
$rawsrcPath = "$gridPath/src";
$srcPath = "$gridPath/production";
$libPath = "$gridPath/externs";
$srcExtPath = "$gridPath/srcexterns";
$distPath = "$gridPath/dist";
$buildPath = "$gridPath/build";
$buildResultPath = "$gridPath/results";
$versionFile = "$gridPath/VERSION";
$buildFile = "$gridPath/BUILD";
$licenseFile = "$gridPath/LICENSE";
$calcdepsFile = "$binPath/calcdeps.py";
$generaterequires= "$binPath/generaterequires";
$removedebugcode = "$binPath/removedebugcode";
$compilerJar = "$gridPath/lib/closure-compiler/compiler.jar";
$compilerIniFile = "$gridPath/closure-compiler.ini";
$srcPattern = '/.*\.js$/';

$version = file_get_contents($versionFile);
if (!$version) {
	die("Could not open the version file: $versionFile\n");
}
$version = trim($version);

$build = file_get_contents($buildFile);
if (!$build) {
	die("Could not open the version file: $buildFile\n");
}
$build = ((int)trim($build)) + 1;
file_put_contents($buildFile, $build);
$buildtime = date("D M j G:i:s T Y");

$buildinfo = "/**\n * JexGrid Build $build\n * Date: $buildtime\n */\n";
echo "\n$buildinfo\n";

$outputFileKr = "jgrid-$version-min.js";
$outputFileUTF8 = "jgrid-$version-min-utf8.js";
$fulloutpath = "$distPath/$outputFileKr";
$fulloutpathUTF8 = "$distPath/$outputFileUTF8";

$debugoutputFileKr = "jgrid-$version-min-debug.js";
$debugoutputFileUTF8 = "jgrid-$version-min-utf8-debug.js";
$debugfulloutpath = "$distPath/$debugoutputFileKr";
$debugfulloutpathUTF8 = "$distPath/$debugoutputFileUTF8";

echo "\nJexGrid v$version build $build...\n\n";

$license = file_get_contents($licenseFile);
if (!$license) {
	die("Could not open the version file: $licenseFile\n");
}
$license = "/*\n" . trim($license) . "\n*/\n";
//echo "\n$license\n";

system("php $removedebugcode");

// read in source files from src path using src pattern
echo "[ reading source files... ]\n\n";
$dirIterator = new RecursiveDirectoryIterator($srcPath);
$iterator = new RecursiveIteratorIterator($dirIterator, RecursiveIteratorIterator::SELF_FIRST);
$regexIterator = new RegexIterator($iterator, $srcPattern);
$size = 0;
$filenames = array();
foreach ($regexIterator as $file) {
	if ($file->isFile()) {
		$filename = $file->getPathname();
		echo "found \"$filename\": " . round($file->getSize() / 1024, 1) . "KB, " . date("Y-m-d", $file->getMTime()) . "\n";
		$size += $file->getSize();
		$filenames[$filename] = $filename;
	}
}
echo "\n\n";

// read in source files from src path using src pattern
echo "[ reading debugging source files... ]\n\n";
$dirIterator = new RecursiveDirectoryIterator($rawsrcPath);
$iterator = new RecursiveIteratorIterator($dirIterator, RecursiveIteratorIterator::SELF_FIRST);
$regexIterator = new RegexIterator($iterator, $srcPattern);
$size = 0;
$debugfilenames = array();
foreach ($regexIterator as $file) {
	if ($file->isFile()) {
		$filename = $file->getPathname();
		echo "found \"$filename\": " . round($file->getSize() / 1024, 1) . "KB, " . date("Y-m-d", $file->getMTime()) . "\n";
		$size += $file->getSize();
		$debugfilenames[$filename] = $filename;
	}
}
echo "\n\n";

echo "[ reading source externs files... ]\n\n";
$dirIterator = new RecursiveDirectoryIterator($srcExtPath);
$iterator = new RecursiveIteratorIterator($dirIterator, RecursiveIteratorIterator::SELF_FIRST);
$regexIterator = new RegexIterator($iterator, $srcPattern);
$size = 0;
foreach ($regexIterator as $file) {
	if ($file->isFile()) {
		$filename = $file->getPathname();
		echo "found \"$filename\": " . round($file->getSize() / 1024, 1) . "KB, " . date("Y-m-d", $file->getMTime()) . "\n";
		$size += $file->getSize();
		$filenames[$filename] = $filename;
		$debugfilenames[$filename] = $filename;
	}
}
echo "\n\n";

echo "[ reading external library files... ]\n\n";
// read in library files from lib path using src pattern
$dirIterator = new RecursiveDirectoryIterator($libPath);
$iterator = new RecursiveIteratorIterator($dirIterator, RecursiveIteratorIterator::SELF_FIRST);
$regexIterator = new RegexIterator($iterator, $srcPattern);
$size = 0;
$libfilenames = array();
foreach ($regexIterator as $file) {
	if ($file->isFile()) {
		$filename = $file->getPathname();
		echo "found \"$filename\": " . round($file->getSize() / 1024, 1) . "KB, " . date("Y-m-d", $file->getMTime()) . "\n";
		$size += $file->getSize();
		$libfilenames[$filename] = $filename;
	}
}
echo "\n\n";

// read in dependencies
echo "[ calculating dependencies... ]\n\n";
$depsCommand = "$calcdepsFile -c $compilerJar -p $srcPath -o deps --output_file=$srcPath/deps.js";
echo $depsCommand . "\n\n\n";
system($depsCommand);

system("cp $srcPath/deps.js $rawsrcPath/deps.js");
system("php $generaterequires");

// read in closure compiler settings from ini file
echo "[ reading compiler settings... ]\n\n";
$compilerSettings = parse_ini_file($compilerIniFile);
$compilerFlags = '';
foreach ($compilerSettings as $k=>$v) {
	if ($v) {
		if ($v === 'FLAG_SET') {
			$compilerFlags .= " --$k";
			echo "--$k\n";
		}
		else {
			$compilerFlags .= " --$k $v";
			echo "--$k $v\n";
		}
	}
}

array_walk($libfilenames, function($n) { echo "--externs $n\n"; });
array_walk($filenames, function($n) { echo "--js $n\n"; });
$libFiles = implode(' ', array_map(function($n) { return "--externs $n"; }, $libfilenames));
$sourceFiles = implode(' ', array_map(function($n) { return "--js $n"; }, $filenames));
$debugsourceFiles = implode(' ', array_map(function($n) { return "--js $n"; }, $debugfilenames));
$outfile = "--js_output_file $fulloutpath";
$debugoutfile = "--js_output_file $debugfulloutpath";
echo "$outfile\n";
$debuggingCompilerFlags = "$compilerFlags $libFiles $debugsourceFiles $debugoutfile --formatting=PRETTY_PRINT";
$compilerFlags .= " $libFiles $sourceFiles $outfile";
echo "\n\n";


// compile
echo "[ start compiling... ]\n\n";
$compilerCommand = "java -jar $compilerJar$compilerFlags";
echo $compilerCommand."\n\n\n";

// compile js sources
system($compilerCommand);

$compiled = $buildinfo . $license . "\n" . file_get_contents($fulloutpath);
file_put_contents($fulloutpath, $compiled);
file_put_contents($fulloutpathUTF8, mb_convert_encoding($compiled, 'UTF-8', 'EUC-KR'));

// compile for debugging
echo "[ start compiling for debugging... ]\n\n";
$compilerCommand = "java -jar $compilerJar$debuggingCompilerFlags";
echo $compilerCommand."\n\n\n";

// compile js sources
system($compilerCommand);

$compiled = $buildinfo . $license . "\n" . file_get_contents($debugfulloutpath);
file_put_contents($debugfulloutpath, $compiled);
file_put_contents($debugfulloutpathUTF8, mb_convert_encoding($compiled, 'UTF-8', 'EUC-KR'));

echo "\n\n[ finished compiling... ]\n\n";
