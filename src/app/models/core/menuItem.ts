export class MenuItem {

    module: string;

    children: Array<MenuItem> = [];

    label: string;

    isGroup?: boolean;

    icon: string;

    isOpen = false;
}
