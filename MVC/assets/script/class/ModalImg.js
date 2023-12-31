
export class ModalImg{
    constructor(el){
        this.el = el;
        this.elCover = this.el.closest('[data-js-modal="cover"]');
        this.elExit = this.elCover.querySelector('[data-js-trigger="exit"]');
        this.elImg = el.querySelector('[data-js-img]');
        this.elBody = document.body;
        this.#init();
    }

    #init() {
        this.elCover.addEventListener('click', (e) => {
            if(e.target == this.elCover ||
            e.target == this.elExit || 
            e.target == this.elExit.closest('div')) {
                this.#fermerModal();
            }
        })
    }

    ouvrirModal(src) {
        console.log(this.el, this.elCover)
        this.el.classList.remove('non-exist');
        this.elCover.classList.remove('non-exist');
        this.elBody.classList.add('no-scroll');
        this.elImg.src = src;
    }

    #fermerModal() {
        this.el.classList.toggle('non-exist');
        this.elCover.classList.toggle('non-exist');
        this.elBody.classList.toggle('no-scroll');
    }

    fermerImg() {
        this.el.classList.add('non-exist');
    }
}
