import { storiesOf } from '@storybook/vue';
import {__name__} from './{__name__}.vue';

storiesOf('{__name__}', module)
  .addParameters({ component: {__name__} })
  .add('base', () => ({
    components: { },
    data () {
      return {
      };
    },
    template: `
        <div style="text-align: center; margin:100px;">
            Content
        </div>
      `,
  }));
