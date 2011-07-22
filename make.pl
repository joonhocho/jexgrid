#!/usr/bin/perl -w
use strict;
use warnings;
use POSIX qw/strftime/;

my $encoding = 'euc-kr';
my $gridpath = '/var/www/jexgrid';
my $rpath = "$gridpath/src";
my $opath = "$gridpath/dist";
my $mypath = "$gridpath/build";

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

my $ver = "$gridpath/VERSION";
open(VER, "<:encoding($encoding)", $ver) or die("Could not open $ver file. $!");
my $vers = <VER>;
close(VER);

my $out = "$opath/jgrid-$vers-all.js";
open(OUT, ">:encoding($encoding)", $out) or die("Could not open $out file. $!");

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
	$file = "$rpath/$file.js";
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

my @args = ("java", "-jar", "$mypath/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar", "--charset", "EUC-KR", "--line-break", "256", "-o", "$opath/jgrid-$vers-min.js", "$opath/jgrid-$vers-all.js");
system(@args);

open(MININ, "<:encoding($encoding)", "$opath/jgrid-$vers-min.js") or die("Could not open MIN");
my @minin = <MININ>;
close(MININ);

open(UTFOUT, ">:encoding(utf-8)", "$opath/jgrid-$vers-min-utf8.js") or die("Could not open $opath/jgrid-$vers-min-utf8.js");
print UTFOUT @minin;
close(UTFOUT);

@args = ("$mypath/einars-js-beautify-f614cc4/qtscript/jsbeautify -s 1 -c '\t' $opath/jgrid-$vers-min.js > $opath/jgrid-$vers-min-beautified.js");
system(@args);

@args = ("$mypath/einars-js-beautify-f614cc4/qtscript/jsbeautify -s 1 -c '\t' $opath/jgrid-$vers-all.js > $opath/jgrid-$vers-all-beautified.js");
system(@args);

system("svn status | grep '\''?'\'' | sed '\''s/^.* /svn add /'\'' | bash");
system("svn ci");
