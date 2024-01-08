//for roulter
export interface Route {
  path: string;
  element: JSX.Element;
}

//for board

export interface Post {
  title: string;
  writer: string;
  content: string;
  timestamp: number;
}
