## Test environments

* local R installation, R 3.6.2
* ubuntu 16.04 (on travis-ci), R 3.6.2
* win-builder (devel)
* r-hub (`check_for_cran`)

## R CMD check results

0 errors | 0 warnings | 1 note

* This is a new release.

## Initial submission

> Please do not start your description with phrases like 'This is a R package', 'This package', the package name or similar.

The description does not include such wording.

> The Description field is intended to be a (one paragraph) description of what the package does and why it may be useful. Please elaborate.

I have expanded on the description so it is clearer what the package does.

> Please add \value to all .Rd files that are not data files and explain the functions results in the documentation. f.i.: server_default.Rd If a function does not return a value, please document that too, e.g. \value{None}.

Every function has uses the `@return` tag to produce the corresponding `\value`.
