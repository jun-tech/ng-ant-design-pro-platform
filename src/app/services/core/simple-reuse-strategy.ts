import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

/**
 * 路由复用策略
 */
export class SimpleReuseStrategy implements RouteReuseStrategy {

  public static handlers: { [key: string]: DetachedRouteHandle } = {};
  private static waitDelete: string;

  /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
  public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (SimpleReuseStrategy.waitDelete && SimpleReuseStrategy.waitDelete === this.getRouteUrl(route)) {
      // 如果待删除是当前路由则不存储快照
      SimpleReuseStrategy.waitDelete = null;
      return;
    }
    console.log('当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象');
    SimpleReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
  }

  /** 若 path 在缓存中有的都认为允许还原路由 */
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log('若 path 在缓存中有的都认为允许还原路由');
    return !!SimpleReuseStrategy.handlers[this.getRouteUrl(route)];
  }

  /** 从缓存中获取快照，若无则返回null */
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    console.log('从缓存中获取快照，若无则返回null');
    if (!route.routeConfig) {
      return null;
    }
    return SimpleReuseStrategy.handlers[this.getRouteUrl(route)];
  }

  /** 进入路由触发，判断是否同一路由 */
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.log('进入路由触发，判断是否同一路由');
    return future.routeConfig === curr.routeConfig &&
      JSON.stringify(future.params) === JSON.stringify(curr.params);
  }

  private getRouteUrl(route: ActivatedRouteSnapshot) {
    return route['_routerState'].url.replace(/\//g, '_');
  }

  // tslint:disable-next-line:member-ordering
  public static deleteRouteSnapshot(url: string): void {
    const key = url.replace(/\//g, '_');
    if (SimpleReuseStrategy.handlers[key]) {
      delete SimpleReuseStrategy.handlers[key];
    } else {
      SimpleReuseStrategy.waitDelete = key;
    }
  }
}
