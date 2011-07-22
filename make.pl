#!/usr/bin/perl -w
use strict;
use warnings;
use POSIX qw/strftime/;

my $encoding = 'euc-kr';
my $gridpath = '/var/www/jexgrid';
my $srcpath = "$gridpath/src";
my $distpath = "$gridpath/dist";
my $buildpath = "$gridpath/build";

sub trim($) {
	my $str = shift;
	$str =~ s/^\s+//;
	$str =~ s/\s+$//;
	return $str;
}

my $VER = "$gridpath/VERSION";
open(VER) or die("Could not open $VER file. $!");
my $vers = trim(readline(*VER));
close(VER);

my $raw = "$distpath/jgrid-$vers-raw.js";
open(OUT, ">:encoding($encoding)", $raw) or die("Could not open $raw file. $!");

my @files = qw(engine_ext
array_ext_ie
util
util_jquery
tracer
jgrid_manager
goog_base
lang_disposable
events_eventdispatcher
jgrid_column
tree
jgrid_grid
jgrid_cache
jgrid_cell
jgrid_checkmanager
jgrid_coldefmanager
jgrid_colheader
jgrid_collapser
jgrid_colgroup
jgrid_datacreator
jgrid_datamanager
jgrid_editmanager
jgrid_eventmanager
jgrid_footer
jgrid_menubar
jgrid_renderer
jgrid_searchmanager
jgrid_selectionmanager
jgrid_tooltipmanager
jgrid_viewportmanager);


print OUT "/*!\n * JexGrid JavaScript Library v$vers\n * Date: " . strftime('%b-%d-%Y %T',localtime) . "\n *\n";

my $lic = "$gridpath/LICENSE";
open(LIC, "<:encoding($encoding)", $lic) or die("Could not open $lic file. $!");
my @lines = <LIC>;
for my $line (@lines) {
	$line =~ s/\r\n$/\n/;
	print OUT " * $line";
}
print OUT "\n *\n */\n";

print OUT "(function() {\n";
for my $file (@files) {
	$file = "$srcpath/$file.js";
	print "reading $file...\n";
	open(INFO, "<:encoding($encoding)", $file) or die("Could not open $file file. $!");
	#open(INFO, "<:encoding(UTF-8)", $file) or die("Could not open $file file. $!");
	my @lines = <INFO>;
	print OUT "\n\n/*\n * $file\n */\n\n";
	my $comment = 0;
	for my $line (@lines) {
		next if ($line =~ m/\/\/ TBR$/);
		if ($line =~ m/^\/\*!/) {
			$comment = 1;
			next;
		}
		if ($comment == 1 && $line =~ m/^ \*\//) {
			$comment = 0;
			next;
		}
		$line =~ s/\r\n$/\n/;
		
		if ($comment != 1) {
			print OUT $line;
		}
	}
	print OUT "\n";
   print "done\n";
	close(INFO);
}
print OUT "}());";
close(OUT);

my @args = ("java", "-jar", "$buildpath/yuicompressor-2.4.6/build/yuicompressor-2.4.6.jar", "--charset", "EUC-KR", "--line-break", "256", "-o", "$distpath/jgrid-$vers-min.js", $raw);
system(@args);

open(MININ, "<:encoding($encoding)", "$distpath/jgrid-$vers-min.js") or die("Could not open MIN");
my @minin = <MININ>;
close(MININ);

open(UTFOUT, ">:encoding(utf-8)", "$distpath/jgrid-$vers-min-utf8.js") or die("Could not open $distpath/jgrid-$vers-min-utf8.js");
print UTFOUT @minin;
close(UTFOUT);
