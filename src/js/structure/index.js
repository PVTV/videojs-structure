import '../extendjs';
import document from 'global/document';

/**
 * Function to add custom wrapper and structure  into videojs plugin
 *
 * @function Structure
 * @param    {Player} player
 *           A Video.js player.
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
class Structure {
    /**
     * Structure Constructor.
     *
     * @classdesc A class that represents a the Structure update.
     * @constructs Structure
     * @param {Object} player The current player instance
     * @param {Object} options Object array to set up the settings
     */
  constructor(player, options) {
    this.player = player.el();
    this.options = options;
    this.addWrap();
  }
  /**
   * customWrap fto create a new wrap element and append into video instance
   *
   * @return {Object} return the new node element
   * @function customWrap
   *
   */
  customWrap() {
    // Create div element to wrap all the video elements
    const wrapper = document.createElement('div');

    // Added custom class
    wrapper.className = this.options.customClass;
    return wrapper;
  }
  /**
  * addWrap wrapp all the video element into the new wrapper
  *
  * @function addWrap
  *
  */
  addWrap() {
    const wrapper = this.customWrap();

    wrapper.wrapAll(this.player.childNodes);
    this.player.appendChild(wrapper);

    if (this.options.moveControl) {
      this.moveControls();
    }
    // We define compopnents zones that will append into the video wrapper
    this.componentZones(wrapper, 'components-second-zone');
    this.componentZones(this.player, 'components-first-zone');
  }
  /**
   * moveControls move control to the video parent
   *
   * @function moveControls
   *
   */
  moveControls() {
    const fragment = document.createDocumentFragment();

    fragment.appendChild(this.player.getElementsByClassName('vjs-control-bar')[0]);
    this.player.appendChild(fragment);
  }
  /**
   * componentZones will create a components zones
   *
   * @param {Object} elm Element that will append to new zone wrapper
   * @param {Object} component the class name for the new zone
   * @function componentZones
   *
   */
  componentZones(elm, component) {
    const zone = this.player.getElementsByClassName(component);

    if (zone.length > 0) {
      const fragment = document.createDocumentFragment();

      fragment.appendChild(this.player.getElementsByClassName(component)[0]);
      elm.appendChild(fragment);
    }
  }
}
export default Structure;
