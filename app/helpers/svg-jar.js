import Ember from "ember";
import makeHelper from 'ember-svg-jar/utils/make-helper';
import makeSVG from 'ember-svg-jar/utils/make-svg';
import inlineAssets from '../inline-assets';

const htmlSafe = Ember.String.htmlSafe;

export function svgJar(assetId, svgAttrs) {
  return htmlSafe(makeSVG(assetId, svgAttrs, inlineAssets));
}

export default makeHelper(svgJar);
