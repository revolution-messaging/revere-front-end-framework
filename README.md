# Revere Pattern Library

Version 3.0.0


## Structure

### Base Layout

The base layout for Revere Apps contains four components:

- (B) Header `.revere__hed` Contains Revere Logo
- (M) Suite Navigation `.suite` Contains Links to all Revere Apps
- (M) Administration Navigation `.admin` Contains Administrative links and options
- (M) Canvas `.canvas` Contains app specific content

#### Canvas
- (B) Header `.app__hed`
- (M) Application Navigation `.app`

## MBE - (M)odule, (B)lock, (E)lement Methodology

Follow an MBE (module, block, element) structure. This will be similar to BEM, but without the modifier, which will be covered later. 

The (M)odule will most likely be a large collection of blocks and elements. 

The (B)lock level will be smaller, often repeated collections of elements. 

The (E)lement level will define the content within the context of the block. Where applicable, these elements will follow the print publishing naming convention:

* `--hed` - Headline 
* `--sub` - Subheading  
* `--dek` - Deck, phrase or sentence teasing the article. In web publishing it is often casually referred to as a blurb or teaser  
* `--led` - Lede in print Publishing - Leading paragraph  
* `--body` - Full article, if a lede is required the body will begin after the lede.  
* `--bil` - Billboard in print publishing - Capsule summary text used to promote the body from second-party pages (an example of this would be a slider block on the home-page that clicks through to the full body page.)  
* `--nut` - Nut Graf in print publishing - A nutshell paragraph. 
* `--cap` - Photo Caption - headline for photo 
* `--cut` - Cutline - description of photo - would also serve as the `alt` text in the `img` tag.


When considering the naming convention, each level should be named contextually within relation to its parent or parents, and when the names are descriptive, they need to be descriptive of the content/role/function, and not of appearance, so having a block or element named _call-to-action_ would be good, but having one named _red_ or _column-3_ would be bad. 

#### The Modifier

In some cases it will be necessary to apply multiple states to markup, which is done by adding a modifier to the class. In MBE the modifier would be added as an additional class, rather then an appendage of the element. When taking the modifier into consideration, MBE would be more like MBE(m). An element with a modifier would be handled as follows:

```
&--element {
	&.modifier {}
	&.unmodified {}
}
```

And alternatively one could make the modifier MBE agnostic:

```
&--element {}

.modifier {}
.unmodified {}
```

If you know you will have multiple calls to action with multiple colors, this is a great time to define the priority of the colors like in the example below:

```
&--action {
	// All shared styles
	&.primary {
		background: red;
	} &.secondary {
		background: blue;
	}
}
```



### Code Samples Using the MBE structure

The "Our Stories" block on the [homepage comp](https://asset1.basecamp.com/1764932/projects/12364492/attachments/246297488/5c4887389d6a769584eecb6616ef22df0010/original/OCO-Home-R2.jpg) would adhere to the following design pattern (your markup may vary):

#### Markup

```
<div class="kicker">
 <header class="kicker--hed">
  <h2>Our Stories</h2>
 </header>
 <figure class="kicker__item">
  <picture class="kicker__item--graphic">
   <!-- RWD Images -->
  </picture>
  <figcaption class="kicker__item--body">
   <h3 class="kicker__item--hed">
    Cindy West
    <em></em>
   </h3>
   <blockquote class="kicker__item--quote">
    <p>It's very fulfilling to teach the next generation the value of sustainable farming.</p>
   </blockquote>
  </figcaption>
 </figure>
</div>
```

Note that we still have the html elements at the core where we can apply site-wide styles such as font-face font-size, etc. and then apply more contextual aesthetics like padding and margins to the the module, block or element

#### SCSS

```
 .kicker {
  &__hed {
   h2
  }
  // image with support copy
  &__item {
   &--graphic {}
   &--body {}
   &--hed {
    em
   }
   &--quote {}
  }
 }
 
```


