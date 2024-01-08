//for roulter
export interface Route {
  path: string;
  element: JSX.Element;
}

//for board

export interface Post {
  id: number;
  title: string;
  writer: string;
  content: string;
  timestamp: number;
  /**
   * type 0: global
   * type 1: private
   */
  type: number;
}
