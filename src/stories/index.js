import { storiesOf } from '@storybook/vue'

import MyButton from './../components/MyButton.vue'

storiesOf('Games', module)
  .add('simple', () => ({
    components: { MyButton },
    template: `<MyButton>KEEP IT SIMPLE</MyButton>`
  }))