import React, { useState } from 'react'
import { Bell, ChevronDown, Home, LayoutDashboard, Menu, Moon, Settings, Sun, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`flex flex-col h-screen bg-background text-foreground ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border bg-background">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0 bg-background">
              <div className="flex flex-col h-full">
                <div className="flex items-center p-6 border-b border-border">
                  <LayoutDashboard className="h-6 w-6 mr-2" />
                  <h1 className="text-xl font-bold">SaaS App</h1>
                </div>
                <nav className="flex-1 px-3 py-4">
                  <Button variant="ghost" className="w-full justify-start mb-1 hover:bg-accent hover:text-accent-foreground">
                    <Home className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start mb-1 hover:bg-accent hover:text-accent-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    Users
                  </Button>
                  <Button variant="ghost" className="w-full justify-start mb-1 hover:bg-accent hover:text-accent-foreground">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <span className="sr-only">Toggle dark mode</span>
            {isDarkMode ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-accent hover:text-accent-foreground">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">John Doe</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - hidden on mobile */}
        <aside className="hidden md:block w-64 border-r border-border bg-background">
          <div className="flex items-center p-6">
            <LayoutDashboard className="h-6 w-6 mr-2" />
            <h1 className="text-xl font-bold">SaaS App</h1>
          </div>
          <nav className="px-3">
            <Button variant="ghost" className="w-full justify-start mb-1 hover:bg-accent hover:text-accent-foreground">
              <Home className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-1 hover:bg-accent hover:text-accent-foreground">
              <Users className="h-4 w-4 mr-2" />
              Users
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-1 hover:bg-accent hover:text-accent-foreground">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-background">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,345</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}