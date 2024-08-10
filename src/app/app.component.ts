import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Category, CategoryCardComponent } from "./category-card/category-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoryCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Store-Categories';
  Categories: Category[] = [
    new Category("Laptops", "metalmarious_Laptop.svg", []),
    new Category("Computers", "chieftec_case.svg", []),
    new Category("Monitors", "molumen_LCD_Monitor.svg", []),
    new Category("Gaming", "Ricardo_Zeebo_(Marca_retirada_por_quest_o_de_copyright).svg", []),
    new Category("Tablets", "smartfone_tablet.svg", []),
    new Category("Cables and Adapters", "hdmi-svgrepo-com.svg", []),
    new Category("Computer Components", "publicdomainq-desktop_computer_parts.svg", ["SSD","Cooling systems",
      "Graphics Cards", "RAM", "Processors", "Motherboards", "Hard Drives and Disk Arrays", "Power Supplies"]),
    new Category("Networking Equipment", "wireless-router.svg", ["Routers", "Switches", "Network Adapters",
       "Passive Network Equipment", "Wireless Access Points", "Wi-Fi Range Extenders", "Patch Cables"]),
    new Category("Headphones and accessories", "Shiny-Headphones.svg", ["Headphones", "TWS", "Gaming Headsets",
       "In-Ear Headphones", "Earbuds", "On-Ear Headphones", "Over-Ear Headphones", "Headphone Amplifiers", "Headphone Accessories"]),
    new Category("Keyboards and Mice", "keyboard-mouse.svg", ["Computer Mice", "Gaming Surfaces", "Keyboards",
       "Keyboard and Mouse Set", "Keyboard and Mouse Accessories"]),
    new Category("Electronics Accessories", "usbSTICK.svg", ["USB Flash Drives", "Hubs and Card Readers",
       "PC and Laptop Accessories", "Laptop Components", "Surge Protectors, Adapters, and Extension Cords", "Tablet Cases",
        "Laptop Bags, Backpacks, and Cases", "Extension Cords"]),
    new Category("Office Equipment", "copy-machine.svg", ["MFPs/Printers", "Scanners", "Printer Consumables", "Boards, Flipcharts"])
  ]
}