Good-looking problems: customise your Shiny disconnected screen and error messages.

<!-- badges: start -->
[![Travis build status](https://travis-ci.org/JohnCoene/sever.svg?branch=master)](https://travis-ci.org/JohnCoene/sever)
[![AppVeyor build status](https://ci.appveyor.com/api/projects/status/github/JohnCoene/sever?branch=master&svg=true)](https://ci.appveyor.com/project/JohnCoene/sever)
[![CircleCI build status](https://circleci.com/gh/JohnCoene/sever.svg?style=svg)](https://circleci.com/gh/JohnCoene/sever)
[![Lifecycle: experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
<!-- badges: end -->

<a class="github-button" href="https://github.com/JohnCoene/sever" data-show-count="true" aria-label="Star JohnCoene/sever on GitHub">Star</a> <a class="github-button" href="https://github.com/sponsors/JohnCoene" data-icon="octicon-heart" aria-label="Sponsor @JohnCoene on GitHub">Sponsor</a>

<script async defer src="https://buttons.github.io/buttons.js"></script>

## Install

Get it from Github with `remotes` or `devtools`:

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

![](./img/sever_example.png)

<a href="https://www.buymeacoffee.com/JohnCoene" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-black.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
