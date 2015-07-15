# Render

## RenderStrategies

`render-strategies` can configure some basic Render strategies.
Currently only a `streamed` strategy is implemented.

## RenderConfig

`render-config` has a `builder` function used to build a render function. The render function must ensure that it can use an appropriate `findPageTemplate` function for the given page to render.
