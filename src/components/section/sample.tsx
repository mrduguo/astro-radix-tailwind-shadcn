import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Sample(){
	return <div>
		<h1>Astro</h1>
		<Button>Hello World3</Button>
		<DropdownMenu>
			<DropdownMenuTrigger>Open</DropdownMenuTrigger>
			<DropdownMenuContent>
			  <DropdownMenuLabel>My Account</DropdownMenuLabel>
			  <DropdownMenuSeparator />
			  <DropdownMenuItem>Profile</DropdownMenuItem>
			  <DropdownMenuItem>Billing</DropdownMenuItem>
			  <DropdownMenuItem>Team</DropdownMenuItem>
			  <DropdownMenuItem>Subscription</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>

	</div>
}