<script setup>
import { blockColor } from '../data/color.ts'
const { primary, secondary, neutrals, extended } = blockColor
</script>

# Colors

Color palette listings and general guide to use colors in product design.

## Guideline

### Primary colors

<div class="Grid Grid--smallGutter u-marginTopSmall">
    <div class="u-sizeFull lg:u-size1of2 u-marginBottomMedium" v-for="item in primary">
        <div
            class="u-flex u-justifyContentBetween u-text100 u-paddingHorizontalExtraSmall u-paddingBottomTiny u-paddingTopMedium"
            :class="item.classBackground, item.classText || 'u-textWhite'"
            :style="'background-color:'+item.color">
            <span>{{item.title}}</span>
            <span>{{item.color}}</span>
        </div>
    </div>
</div>

Our primary palette is comprised of blue, dark neutral, white, and orange. These colors are present across most touch points from marketing to product.

<ul v-for="item in primary">
    <li>{{item.title}} {{item.name}} - <code>{{item.color}}</code> {{item.description}}</li>
</ul>

### Secondary colors

<div class="Grid Grid--smallGutter u-marginTopSmall">
    <div class="u-sizeFull lg:u-size1of2 u-marginBottomMedium" v-for="item in secondary">
        <div
            class="u-flex u-justifyContentBetween u-text100 u-paddingHorizontalExtraSmall u-paddingBottomTiny u-paddingTopMedium"
            :class="item.classText || 'u-textWhite'"
            :style="'background-color:'+item.color">
            <span>{{item.title}}</span>
            <span>{{item.color}}</span>
        </div>
    </div>
</div>

<ul v-for="item in secondary">
    <li>{{item.title}} {{item.name}} - <code>{{item.color}}</code> {{item.description}}</li>
</ul>

<div className="Grid Grid--smallGutter u-marginBottomExtraSmall">
    <div className="u-sizeFull lg:u-size1of2 u-marginBottomMedium"  v-for="neutral in neutrals">
      <h6 className="u-marginBottomExtraSmall">{{neutral.title}}</h6>
        <div
            v-for="item in neutral.list"
            class="u-flex u-justifyContentBetween u-text100 u-paddingHorizontalExtraSmall u-paddingVerticalExtraSmall u-marginBottomTiny"
            :class="item.classText || 'u-textWhite'"
            :style="'background-color:'+item.color">
            <span>{{item.title}}</span>
            <span>{{item.color}}</span>
        </div>
    </div>
</div>

### Extended palette

Extended palette is all the useable tints and shades of each color in the palette. It can be used for background, illustrations and components in product.

<div className="Grid Grid--smallGutter u-marginBottomExtraSmall">
    <div className="u-sizeFull lg:u-size1of2 u-marginBottomMedium"  v-for="palette in extended">
      <h6 className="u-marginBottomExtraSmall">{{palette.title}}</h6>
        <div
            v-for="item in palette.list"
            class="u-flex u-justifyContentBetween u-text100 u-paddingHorizontalExtraSmall u-paddingVerticalExtraSmall u-marginBottomTiny"
            :class="item.classText || 'u-textWhite'"
            :style="'background-color:'+item.color">
            <span>{{item.title}}</span>
            <span>{{item.color}}</span>
        </div>
    </div>
</div>
