import { storiesOf } from '@storybook/vue';
import MaDeleteButton from './MaDeleteButton.vue';

storiesOf('MaDeleteButton', module)
  .addParameters({ component: MaDeleteButton })
  .add('Base', () => ({
    components: { MaDeleteButton },
    template: `
      <div class="m-p-10">
        <ma-delete-button/>
      </div>
    `,
  }))
  .add('disabled', () => ({
    components: { MaDeleteButton },
    template: `
    <div class="m-p-10">
      <ma-delete-button disabled/>
    </div>
    `,
  }))
  .add('loading', () => ({
    components: { MaDeleteButton },
    template: `
    <div class="m-p-10">
      <ma-delete-button loading/>
    </div>
    `,
  }));
