<img src="./img/logo.png" style="max-height:230px!important;max-width:200px!important;" align="right">

Good-looking problems: customise your Shiny disconnected screen and error messages.

<a class="github-button" href="https://github.com/JohnCoene/sever" data-show-count="true" aria-label="Star JohnCoene/sever on GitHub">Star</a> <a class="github-button" href="https://github.com/sponsors/JohnCoene" data-icon="octicon-heart" aria-label="Sponsor @JohnCoene on GitHub">Sponsor</a>

<script async defer src="https://buttons.github.io/buttons.js"></script>

## Install

Install the stable version from CRAN:

```r
install.packages("sever")
```

Get the development version from Github with `remotes` or `devtools`:

```r
# install.packages("remotes")
remotes::install_github("JohnCoene/sever")
```

## Usage

1. Place `use_sever()` in your Shiny UI.
2. Use `sever()` to customise the disconnected screen.
3. Use `cleave()` to customise _hard_ error messages. 
4. Use `chisel()` to customise _soft_ error messages. 

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

<style>.bmc-button img{height: 34px !important;width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 10px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#000000 !important;background-color:#FFFFFF !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 10px 7px 10px !important;font-size: 22px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#000000 !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/JohnCoene"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a drink"><span style="margin-left:15px;font-size:28px !important;">Buy me a drink</span></a>
