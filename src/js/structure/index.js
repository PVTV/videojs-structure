import '../extendjs';

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
     * @param {Array} items Array Object Items has slide image and time to show the slide
     */
    constructor(player, options){
        this.player = player.el();
        this.options = options;
        this.addWrap();
    }
    /**
     * customWrap fto create a new wrap element and append into video instance
     *
     * @return {object} return the new node element
     * @function customWrap
     *
     */
    customWrap () {
        // Create div element to wrap all the video elements
        const wrapper = document.createElement('div');

        // Added custom class
        wrapper.className =  this.options.customClass;
        
        return wrapper;
    };
    /**
     * addWrap wrapp all the video element into the new wrapper
     *
     * @return {avoid} doesn't return
     * @function addWrap
     *
     */
    addWrap () {
        const wrapper = this.customWrap();

        wrapper.wrapAll(this.player.childNodes);
        this.player.appendChild(wrapper);

        if( this.options.moveControl ){
            this.moveControls();
        }
        
    };
    /**
     * moveControls move control to the video parent
     *
     * @return {avoid} doesn't return
     * @function moveControls
     *
     */
    moveControls () {
        const fragment = document.createDocumentFragment();

        fragment.appendChild(this.player.getElementsByClassName('vjs-control-bar')[0]);
        this.player.appendChild(fragment);
    };
    

}

export default Structure;