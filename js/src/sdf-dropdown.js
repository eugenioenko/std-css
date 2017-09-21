/**
 * SDF Toasts
 * Toast Gadget for SDF
 * @package SDF
 * @author  eugenioenko
 * @license http://opensource.org/licenses/MIT  MIT License
 * @link    https://github.com/eugenioenko/sdf-css
 * @since   Version 1.0.0
 */
 (function(){
    'use strict';

    var sdfDropdown = function(){
        this.dropdowns = {};
        this.selector = '[sdf-dropdown-menu]';
        this.init();
    };

    sdfDropdown.prototype.hide = function(id){
        var popup = this.dropdowns[id];
        if(popup){
            popup.open = false;
            popup.element.style.display = 'none';
            popup.element.setAttribute('aria-hidden', 'true');
            if(popup.toggle){
                popup.toggle.setAttribute('aria-expanded', 'false');
            }
        }
    };
    sdfDropdown.prototype.hideAll = function(){
        for (var id in this.dropdowns){
            if (this.dropdowns.hasOwnProperty(id) && this.dropdowns[id].open == true) {
                this.hide(id);
            }
        }
    };

    sdfDropdown.prototype.show = function (id){
        var popup = this.dropdowns[id];
        if(popup){
            popup.open = true;
            popup.element.style.display = 'block';
            popup.element.setAttribute('aria-hidden', 'false');
            if(popup.toggle){
                popup.toggle.setAttribute('aria-expanded', 'true');
            }
        }

    };
    var clickEventGenerator = function(that, id){
        return function(){
            that.hide(id);
        };
    };
    sdfDropdown.prototype.init = function(){
        var elements = document.querySelectorAll(this.selector);
        for (var i = elements.length - 1; i >= 0; i--) {
            var element = elements[i];
            // gets or creates an id for the dropdown
            var id = element.getAttribute('id');
            if(!id){
                id = "sdf-dropdown-" + i;
                element.setAttribute('id', id);
            }
            // gets or sets initial state for dropdown: closed or opened
            element.setAttribute('aria-hidden', 'true');
            var toggle = document.querySelector('[sdf-dropdown-toggle="' + id + '"]');
            if(toggle){
                toggle.setAttribute('aria-expanded', 'false');
            }
            // sets position of dropdown to top-left if no option set
            var position = element.getAttribute('sdf-dropdown-menu');
            if(!position){
                element.setAttribute('sdf-dropdown-menu', 'top-left');
            }
            // puts the current dropdown into the list
            this.dropdowns[id] = {
                element: element,
                toggle: toggle,
                open: false
            };
            element.addEventListener('click', clickEventGenerator(this, id));
        }
    };

    //register component
    sdf.addGadget({
        constructor: sdfDropdown,
        name: 'dropdown'
    });

})();