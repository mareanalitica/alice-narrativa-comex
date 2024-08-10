import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function TopBar() {
    return (
        <div className="w-full bg-white shadow-md">
            <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-6 p-4">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-gray-800 hover:text-blue-600">Sobre</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                            <NavigationMenuLink href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Time
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-gray-800 hover:text-blue-600">Contato</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                            <NavigationMenuLink href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Email
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuIndicator />
                <NavigationMenuViewport />
            </NavigationMenu>
        </div>
    );
}
