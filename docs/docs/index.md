# sever

Good-looking problems: customise your Shiny disconnected screen and error messages.

<!-- badges: start -->
[![Travis build status](https://travis-ci.org/JohnCoene/sever.svg?branch=master)](https://travis-ci.org/JohnCoene/sever)
[![AppVeyor build status](https://ci.appveyor.com/api/projects/status/github/JohnCoene/sever?branch=master&svg=true)](https://ci.appveyor.com/project/JohnCoene/sever)
[![CircleCI build status](https://circleci.com/gh/JohnCoene/sever.svg?style=svg)](https://circleci.com/gh/JohnCoene/sever)
<!-- badges: end -->
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/JohnCoene/sever" data-icon="octicon-star" aria-label="Star JohnCoene/sever on GitHub">Star</a>
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://github.com/sponsors/JohnCoene" data-icon="octicon-heart" aria-label="Sponsor @JohnCoene on GitHub">Sponsor</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

## Install

```r
# install.packages("remotes")
remotes::install_github("JohnCoene/sever")
```

## Usage

1. Place `use_sever()` in your Shiny UI.
2. Use `sever()` to customise the disconnected screen.
3. Use `cleave()` to customise error messages. 

## Example

Place `use_sever` in your Shiny UI and use the `sever` function server-side, cancel the session from the terminal to see the customised screen.

```r
library(shiny)
library(sever)

ui <- fluidPage(
  use_sever(),
  h1("sever")
)

server <- function(input, output){
  sever()
}

shinyApp(ui, server)
```

