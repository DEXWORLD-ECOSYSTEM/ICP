'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from '@/components/ui/sidebar';
import { LayoutDashboard, Newspaper, Tag, Folder, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (!isAuthenticated && pathname !== '/admin/login') {
        router.push('/admin/login');
      }
    }
  }, [pathname, router, isClient]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/admin/login');
  };

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Prevents flash of admin content before redirect
  if (!isClient) {
    return null;
  }
  
  const isAuthenticated = isClient ? localStorage.getItem('isAuthenticated') : false;

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return (
    <SidebarProvider>
      <Sidebar side="left" collapsible="icon" variant='sidebar'>
        <SidebarHeader>
          <Link href="/admin" className="block">
            <h2 className="font-headline text-2xl font-bold text-sidebar-foreground px-2">
              Blogwise
            </h2>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === '/admin'}
                tooltip="Dashboard"
              >
                <Link href="/admin">
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith('/admin/posts')}
                tooltip="Posts"
              >
                <Link href="/admin/posts/new">
                  <Newspaper />
                  <span>Posts</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Categories" asChild>
                <Link href="#">
                  <Folder />
                  <span>Categories</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Tags" asChild>
                <Link href="#">
                  <Tag />
                  <span>Tags</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <SidebarMenu>
             <SidebarMenuItem>
                <SidebarMenuButton tooltip="Profile" asChild>
                    <Link href="#">
                        <User />
                        <span>Profile</span>
                    </Link>
                </SidebarMenuButton>
             </SidebarMenuItem>
             <SidebarMenuItem>
                <SidebarMenuButton tooltip="Log Out" onClick={handleLogout}>
                    <LogOut />
                    <span>Log Out</span>
                </SidebarMenuButton>
             </SidebarMenuItem>
           </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="min-h-screen bg-muted/40 p-4 lg:p-8">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
