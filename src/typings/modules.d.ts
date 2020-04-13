declare module '*.jpg' {
  import { Props } from 'utils/responsive-image';

  const src: Props;
  export default src;
}

declare module '*.jpeg' {
  const src: Props;
  export default src;
}

declare module '*.png' {
  import { Props } from 'utils/responsive-image';

  const src: Props;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default ReactComponent;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}
