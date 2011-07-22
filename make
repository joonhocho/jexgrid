#!/usr/bin/php
<?php
$gridPath = __DIR__;
$pathlen = strlen($gridPath);

/**
 * Build Path Settings
 */
$encoding = 'euc-kr';
$srcPath = "$gridPath/src";
$libPath = "$gridPath/lib/js";
$distPath = "$gridPath/dist";
$buildPath = "$gridPath/build";
$versionFile = "$gridPath/VERSION";
$licenseFile = "$gridPath/LICENSE";
$compilerJar = "$gridPath/lib/closure-compiler/compiler.jar";
$compilerIniFile = "$gridPath/closure-compiler.ini";
$srcPattern = '/.*\.js$/';

$version = file_get_contents($versionFile);
if (!$version) {
	die("Could not open the version file: $versionFile\n");
}
$version = trim($version);

$outputFileKr = "jgrid-$version-min.js";
$outputFileUTF8 = "jgrid-$version-min-utf8.js";

echo "\nJexGrid v$version build...\n\n";

$license = file_get_contents($licenseFile);
if (!$license) {
	die("Could not open the version file: $licenseFile\n");
}
$license = trim($license);
//echo "\n$license\n";


// read in source files from src path using src pattern
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
echo "\n";

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
echo "\n";

// read in closure compiler settings from ini file
$compilerSettings = parse_ini_file($compilerIniFile);
$compilerFlags = '';
foreach ($compilerSettings as $k=>$v) {
	if ($v) {
		if ($v === 'FLAG_SET') {
			$compilerFlags .= " --$k";
		}
		else {
			$compilerFlags .= " --$k $v";
		}
	}
}
$sourceFiles = implode(' ', array_map(function($n) { return "--js $n"; }, $filenames));
$libFiles = implode(' ', array_map(function($n) { return "--externs $n"; }, $libfilenames));
$compilerCommand = "java -jar $compilerJar$compilerFlags $libFiles $sourceFiles --js_output_file $distPath/$outputFileKr";
echo $compilerCommand."\n\n";

// compile js sources
system($compilerCommand, $compilerReturn);
