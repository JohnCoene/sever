# sever 0.0.6.9000

- Added `rupture` to display a disconnected message after the user has been idle for a while.

# sever 0.0.5

* Fix passing multiple ids to `cleave` see [#1](https://github.com/JohnCoene/sever/issues/1)
* Fix to remove cleave error on new value render + empty HTML content on error, see [#2](https://github.com/JohnCoene/sever/issues/2).
* Allow controlling whether silent errors (raised by `validate`) are displayed natively or with cleave, see [#2](https://github.com/JohnCoene/sever/issues/2).
* Add `chisel` to style soft error messages, those raised by `validate`.

# sever 0.0.4

Initial CRAN version.

# sever 0.0.3

- Changed cleave `center` argument to `center_horizontal` and `center_vertical` for more flexibility. 
- Change cleave appear animation speed.

# sever 0.0.2

- Added `cleave` to customise error messages!
- Created website
- Ensure a single severed screen is present at any one time.
- Check if `golem.app.prod` option is set to keep functions from running if in dev mode to allow debugging, runs in prod. If not set runs functions as expected.
- Added `bg_image` argument to `sever` function.

# sever 0.0.1

- `sever_default` A default sever screen.
- Simplified `sever` function: change three-dots to `html` argument which takes `sever_default`.

# sever 0.0.1.9000

Initial dev version.
