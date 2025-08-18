declare module "*.svg" {
	const src: string;
	export default src;
}

declare module "*.svg?component" {
	import * as React from "react";
	const Component: React.FC<React.SVGProps<SVGSVGElement>>;
	export default Component;
}
