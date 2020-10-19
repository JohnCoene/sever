## Test environments

* local R installation (OS X & ubuntu 18.04), R 4.0.1
* ubuntu 16.04 (on travis-ci), R 3.6.0
* win-builder (devel)
* r-hub (`check_for_cran` & `devtools::check_for_cran`)

## R CMD check results

0 errors | 0 warnings | 1 note

* This is a new release.

> Found the following (possibly) invalid URLs:
>      URL: http://sever.john-coene.com/ (moved to
> https://sever.john-coene.com/)
>        From: DESCRIPTION
>        Status: 200
>        Message: OK

The above has been fixed.
