# Colors

Color palette listings and general guide to use colors in product design.

## Guideline

### Primary colors

<div class="BoxColor" style="--bg: #375DE7" data-color="#375DE7" data-color-name="Blue300"></div>
<div class="BoxColor" style="--bg: #172B4D" data-color="#172B4D" data-color-name="Neutral800"></div>
<div class="BoxColor" style="--bg: #FFFFFF; --text: #000;" data-color="#FFFFFF" data-color-name="White"></div>
<div class="BoxColor" style="--bg: #ED6200" data-color="#ED6200" data-color-name="Orange300"></div>

Our primary palette is comprised of blue, dark neutral, white, and orange. These colors are present across most touch points from marketing to product.

- Blue Blue300 - `#375DE7` is used for primary actions and buttons, links, for indicating progress, and representing authentication.
- Dark neutral Neutral800 - `#172B4D` is used primarily for body text and headings.
- White White - `#FFFFFF` is used for page backgrounds and anything that is white.
- Orange Orange300 - `#ED6200` is used like accent color for ask flow and payment flow.

### Secondary colors

<div class="BoxColor" style="--bg: #D0021B" data-color="#D0021B" data-color-name="Red300"></div>
<div class="BoxColor" style="--bg: #FFAB00; --text: #000" data-color="#FFAB00" data-color-name="Yellow300"></div>
<div class="BoxColor" style="--bg: #22A861" data-color="#22A861" data-color-name="Green300"></div>

<style lang="scss">
    .BoxColor {
        display: inline-flex;
        width: calc(var(--width, 50%) - 8px);
        align-items: flex-end;
        justify-content: space-between;
        color: #fff;
        padding: 8px 8px 0 8px;
        height: 44px;
        margin-top: 8px;
        margin-right: 4px;
        margin-left: 4px;
        background-color: var(--bg);
        &::after,
        &::before {
            font-size: 10px;
            color: var(--text, #fff);
        }
        &::after {
            content: attr(data-color);
        }
        &::before {
            content: attr(data-color-name);
        }
    }
</style>
