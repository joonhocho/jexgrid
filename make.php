#!/usr/bin/php
<?php
$gridpath = __DIR__;
$pathlen = strlen($gridpath);

/**
 * Build Path Settings
 */
$encoding = 'euc-kr';
$srcpath = "$gridpath/src";
$distpath = "$gridpath/dist";
$buildpath = "$gridpath/build";
$versionfile = "$gridpath/VERSION";
$licensefile = "$gridpath/LICENSE";
$srcpattern = '/.*\.js$/';

$version = file_get_contents($versionfile);
if (!$version) {
	die("Could not open the version file: $versionfile\n");
}
$version = trim($version);

echo "JexGrid v$version build...\n";

$license = file_get_contents($licensefile);
if (!$license) {
	die("Could not open the version file: $licensefile\n");
}
$license = trim($license);
//echo "\n$license\n";


// read in source files from src path using src pattern
$dir_iterator = new RecursiveDirectoryIterator($srcpath);
$iterator = new RecursiveIteratorIterator($dir_iterator, RecursiveIteratorIterator::SELF_FIRST);
$regexiterator = new RegexIterator($iterator, $srcpattern);
$size = 0;
$filenames = array();
foreach ($regexiterator as $file) {
	if ($file->isFile()) {
		$filename = substr($file->getPathname(), $pathlen + 1);
		echo "found \"$filename\": " . round($file->getSize() / 1024, 1) . "KB, " . date("Y-m-d", $file->getMTime()) . "\n";
		$size += $file->getSize();
		$filenames[$filename] = $filename;
	}
}

