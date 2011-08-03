#!/usr/bin/php
<?php
$gridPath = __DIR__;
$pathlen = strlen($gridPath);

/**
 * Build Path Settings
 */
$encoding = 'euc-kr';
$srcPath = "$gridPath/production";
$libPath = "$gridPath/externs";
$srcExtPath = "$gridPath/srcexterns";
$distPath = "$gridPath/dist";
$buildPath = "$gridPath/build";
$buildResultPath = "$gridPath/results";
$versionFile = "$gridPath/VERSION";
$licenseFile = "$gridPath/LICENSE";
$calcdepsFile = "$gridPath/bin/calcdeps.py";
$compilerJar = "$gridPath/lib/closure-compiler/compiler.jar";
$compilerIniFile = "$gridPath/closure-compiler.ini";
$srcPattern = '/.*\.js$/';

$version = file_get_contents($versionFile);
if (!$version) {
	die("Could not open the version file: $versionFile\n");
}
$version = trim($version);

$outputFileKr = "jgrid-$version-min.js";
$fulloutpath = "$distPath/$outputFileKr";
$outputFileUTF8 = "jgrid-$version-min-utf8.js";

echo "\nJexGrid v$version build...\n\n";

$license = file_get_contents($licenseFile);
if (!$license) {
	die("Could not open the version file: $licenseFile\n");
}
$license = "/*\n" . trim($license) . "\n*/\n";
//echo "\n$license\n";

system('php removedebugcode');

// read in source files from src path using src pattern
echo "[ reading source files... ]\n\n";
$dirIterator = new RecursiveDirectoryIterator($srcPath);
$iterator = new RecursiveIteratorIterator($dirIterator, RecursiveIteratorIterator::SELF_FIRST);
$regexIterator = new RegexIterator($iterator, $srcPattern);
$size = 0;
$filenames = array();
foreach ($regexIterator as $file) {
	if ($file->isFile()) {
		$filename = substr($file->getPathname(), $pathlen + 1);
		echo "found \"$filename\": " . round($file->getSize() / 1024, 1) . "KB, " . date("Y-m-d", $file->getMTime()) . "\n";
		$size += $file->getSize();
		$filenames[$filename] = $filename;
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
		$filename = substr($file->getPathname(), $pathlen + 1);
		echo "found \"$filename\": " . round($file->getSize() / 1024, 1) . "KB, " . date("Y-m-d", $file->getMTime()) . "\n";
		$size += $file->getSize();
		$filenames[$filename] = $filename;
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
		$filename = substr($file->getPathname(), $pathlen + 1);
		echo "found \"$filename\": " . round($file->getSize() / 1024, 1) . "KB, " . date("Y-m-d", $file->getMTime()) . "\n";
		$size += $file->getSize();
		$libfilenames[$filename] = $filename;
	}
}
echo "\n\n";

// read in dependencies
echo "[ calculating dependencies... ]\n\n";
$depsCommand = "$calcdepsFile -p $srcPath -o deps -c $compilerJar --output_file $srcPath/deps.js";
echo $depsCommand . "\n\n\n";
system($depsCommand);

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
$outfile = "--js_output_file $fulloutpath";
echo "$outfile\n";
$compilerFlags .= " $libFiles $sourceFiles $outfile";
echo "\n\n";


// compile
echo "[ start compiling... ]\n\n";
$compilerCommand = "java -jar $compilerJar$compilerFlags";
echo $compilerCommand."\n\n\n";

// compile js sources
system($compilerCommand);

file_put_contents($fulloutpath, $license . "\n" . file_get_contents($fulloutpath));
echo "\n\n[ finished compiling... ]\n\n";
