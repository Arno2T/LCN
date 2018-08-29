// Etat global de l'élément ayant le focus
// -----------------------------------------------------------------------------
const keyboardNavigationState = {
    focusedComponent: null
}

// Mixin
// -----------------------------------------------------------------------------
export const keyboardNavigation = {
    props: {
        id: {
            default: function () {
                return `${this.$options.name}-${this._uid}`
            }
        }
    },
    data() {
        return {
            keyboardNavigationState,
            navigationCoordinates: [0, 0],
            grid: [0, 0]
        }
    },
    watch: {
        'keyboardNavigationState.focusedComponent': function (value) {
            this.id === value
                ? document.addEventListener('keydown', this.$keyListener)
                : document.removeEventListener('keydown', this.$keyListener)
        }
    },
    methods: {
        $keyListener({ keyCode }) {
            console.log(keyCode);
            
            switch (keyCode) {
                case 38:
                    return this.$movePositionInGrid(0, -1)
                case 39:
                    return this.$movePositionInGrid(1, 0)
                case 40:
                    return this.$movePositionInGrid(0, 1)
                case 37:
                    return this.$movePositionInGrid(-1, 0)
            }
        },
        $movePositionInGrid(x, y) {
            const newX = this.navigationCoordinates[0] + x
            const newY = this.navigationCoordinates[1] + y

            if (newX === 1 && newY === 1 && Object.keys(this.$refs).length === 0) {
                this.$getNavigationFocus()
                return
            }

            if (newX === 0 || newY === 0 || newX > this.grid[0] || newY > this.grid[1]) {
                if (this.$parent && this.$parent.$movePositionInGrid) {
                    this.$parent.$movePositionInGrid(x, y)
                }
                return
            }

            this.$setPositionInGrid(newX, newY)
        },
        $setPositionInGrid(x, y) {
            this.navigationCoordinates = [x, y]
            this.$getNavigationFocus()
            this.$focusChild()
        },
        $registerInGrid(x, y) {
            this.grid[0] < x && (this.grid[0] = x)
            this.grid[1] < y && (this.grid[1] = y)
            return this.$getRefName([x, y])
        },
        $getRefName([x, y]) {
            return `${x}-${y}`
        },
        $focusChild() {
            let el = this.$refs[this.$getRefName(this.navigationCoordinates)]
            if (el) {
                if (el instanceof Array) {
                    el = el[0]
                }
                el.$resumeLastCoordinates()
            }
        },
        $resumeLastCoordinates() {
            this.$setPositionInGrid(
                this.navigationCoordinates[0] !== 0 ? this.navigationCoordinates[0] : 1,
                this.navigationCoordinates[1] !== 0 ? this.navigationCoordinates[1] : 1
            )
        },
        $getNavigationFocus() {
            this.keyboardNavigationState.focusedComponent = this.id
            this.onFocus && this.onFocus()
        },
        $hasFocus() {
            return this.keyboardNavigationState.focusedComponent === this.id
        }
    }
}
