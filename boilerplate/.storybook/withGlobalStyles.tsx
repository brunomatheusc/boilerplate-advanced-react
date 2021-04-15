import { StoryFn } from '@storybook/addons';
import Global from '../src/styles/global';

const withGlobalStyles = (storyFn: StoryFn) => (
	<>
		<Global />
		{storyFn()}
	</>
);

export default withGlobalStyles;