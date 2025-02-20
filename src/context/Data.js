const products = [
    {
        "id": 1,
        "name": "Transparent Storage Box",
        "category": "Office Organization",
        "images": [
            "Photos/transparent_box_1.jpg",
            "Photos/transparent_box_2.jpg"
        ],
        "short_description": "Durable transparent box for office supplies.",
        "big_description": "A versatile transparent storage box made from durable acrylic material. Perfect for storing office supplies such as pens, paper, cables, or other small items. Its clear design ensures easy visibility of contents, while its stackable feature saves space.",
        "price": 19.99,
        "dimensions": "30cm x 20cm x 15cm",
        "material": "Acrylic",
        "color": "Clear",
        "stock": 100,
        "weight": "1.2kg",
        "tags": ["office", "storage", "transparent", "lightweight"]
    },
    {
        "id": 2,
        "name": "Stackable Drawer Organizer",
        "category": "Office Organization",
        "images": [
            "Photos/drawer_organizer_1.jpg",
            "Photos/drawer_organizer_2.jpg"
        ],
        "short_description": "Compact and stackable organizer for drawers.",
        "big_description": "A stackable drawer organizer with adjustable compartments to keep your drawers neat and tidy. Made of high-quality, durable plastic, it can hold stationery, cables, or small tools efficiently. The clean, modern design complements any workspace.",
        "price": 29.99,
        "dimensions": "25cm x 25cm x 10cm",
        "material": "Plastic",
        "color": "White",
        "stock": 60,
        "weight": "800g",
        "tags": ["drawer", "stackable", "adjustable", "tidy"]
    },
    {
        "id": 3,
        "name": "Makeup Organizer Box",
        "category": "Makeup Organization",
        "images": [
            "Photos/makeup_box_1.jpg",
            "Photos/makeup_box_2.jpg"
        ],
        "short_description": "Stylish makeup organizer with compartments.",
        "big_description": "A sleek acrylic makeup organizer featuring compartments of various sizes to accommodate brushes, lipsticks, palettes, and other beauty essentials. Its modern design and compact build make it a perfect addition to your vanity or bathroom counter.",
        "price": 24.99,
        "dimensions": "35cm x 25cm x 20cm",
        "material": "Acrylic",
        "color": "Pink",
        "stock": 80,
        "weight": "1.5kg",
        "tags": ["makeup", "organizer", "acrylic", "compact"]
    },
    {
        "id": 4,
        "name": "Kitchen Storage Bin Set",
        "category": "Kitchen Organization",
        "images": [
            "Photos/kitchen_bin_1.jpg",
            "Photos/kitchen_bin_2.jpg"
        ],
        "short_description": "Set of 4 clear bins for pantry organization.",
        "big_description": "This set of 4 durable plastic bins is designed for pantry organization. Each bin features easy-grip handles and is made from BPA-free materials. Perfect for storing snacks, dry goods, or spices, and the transparent design allows for easy visibility.",
        "price": 39.99,
        "dimensions": "Small, Medium, Large",
        "material": "Plastic",
        "color": "Transparent",
        "stock": 50,
        "weight": "3kg",
        "tags": ["kitchen", "storage", "bins", "pantry"]
    },
    {
        "id": 5,
        "name": "Under-Bed Storage Bag",
        "category": "Bedroom Organization",
        "images": [
            "Photos/underbed_bag_1.jpg",
            "Photos/underbed_bag_2.jpg"
        ],
        "short_description": "Breathable storage bag for under-bed use.",
        "big_description": "A large under-bed storage bag made from breathable fabric, perfect for keeping seasonal clothes, linens, or shoes dust-free. Features a durable zipper and handles for easy access and portability. An excellent solution for saving space in your bedroom.",
        "price": 14.99,
        "dimensions": "95cm x 45cm x 20cm",
        "material": "Fabric",
        "color": "Gray",
        "stock": 120,
        "weight": "1kg",
        "tags": ["bedroom", "storage", "space-saving", "dust-free"]
    },
    {
        "id": 6,
        "name": "Multi-Purpose Storage Cube",
        "category": "Living Room Organization",
        "images": [
            "Photos/storage_cube_1.jpg",
            "Photos/storage_cube_2.jpg"
        ],
        "short_description": "Stylish cube for multi-purpose storage.",
        "big_description": "This fabric-covered storage cube offers a versatile solution for organizing books, toys, or clothes. Its collapsible design allows easy storage when not in use, and the modern finish ensures it blends perfectly with living room decor.",
        "price": 12.99,
        "dimensions": "30cm x 30cm x 30cm",
        "material": "Fabric",
        "color": "Beige",
        "stock": 70,
        "weight": "700g",
        "tags": ["living room", "cube", "storage", "collapsible"]
    },
    {
        "id": 7,
        "name": "Wall-Mounted Key Holder",
        "category": "Entryway Organization",
        "images": [
            "Photos/key_holder_1.jpg",
            "Photos/key_holder_2.jpg"
        ],
        "short_description": "Wall-mounted key holder with hooks.",
        "big_description": "Keep your keys and small items organized with this sleek, wall-mounted key holder. Featuring 5 sturdy hooks and a small tray for mail or wallets, it's a functional and stylish addition to your entryway.",
        "price": 9.99,
        "dimensions": "20cm x 10cm x 5cm",
        "material": "Metal",
        "color": "Black",
        "stock": 150,
        "weight": "500g",
        "tags": ["entryway", "key holder", "hooks", "wall-mounted"]
    },
    {
        "id": 8,
        "name": "Rotating Spice Rack",
        "category": "Kitchen Organization",
        "images": [
            "Photos/spice_rack_1.jpg",
            "Photos/spice_rack_2.jpg"
        ],
        "short_description": "Compact rotating spice rack with jars.",
        "big_description": "A space-saving spice rack featuring a rotating base and 12 glass jars with airtight lids. The compact design fits perfectly on kitchen counters, making it easy to access your spices while cooking. Comes pre-labeled for convenience.",
        "price": 34.99,
        "dimensions": "20cm x 20cm x 25cm",
        "material": "Plastic, Glass",
        "color": "Silver",
        "stock": 40,
        "weight": "2kg",
        "tags": ["kitchen", "spice rack", "rotating", "glass jars"]
    },
    {
        "id": 9,
        "name": "Desktop File Organizer",
        "category": "Office Organization",
        "images": [
            "Photos/file_organizer_1.jpg",
            "Photos/file_organizer_2.jpg"
        ],
        "short_description": "Modern file organizer for desks.",
        "big_description": "A modern file organizer with multiple tiers to keep your documents and folders neatly arranged. Made of metal mesh, it offers durability and a sleek look, perfect for any office desk setup.",
        "price": 18.99,
        "dimensions": "35cm x 25cm x 15cm",
        "material": "Metal",
        "color": "Black",
        "stock": 90,
        "weight": "1.5kg",
        "tags": ["office", "file organizer", "durable", "modern"]
    },
    {
        "id": 10,
        "name": "Hanging Shoe Organizer",
        "category": "Bedroom Organization",
        "images": [
            "Photos/shoe_organizer_1.jpg",
            "Photos/shoe_organizer_2.jpg"
        ],
        "short_description": "Space-saving hanging shoe organizer.",
        "big_description": "A hanging shoe organizer with 10 compartments, designed to fit over closet rods or doors. Ideal for keeping your shoes, accessories, or folded clothes organized and accessible while saving closet space.",
        "price": 19.99,
        "dimensions": "120cm x 30cm",
        "material": "Fabric",
        "color": "Gray",
        "stock": 100,
        "weight": "1kg",
        "tags": ["bedroom", "shoe organizer", "space-saving", "hanging"]
    },
    {
        "id": 11,
        "name": "Foldable Laundry Hamper",
        "category": "Laundry Organization",
        "images": [
            "Photos/laundry_hamper_1.jpg",
            "Photos/laundry_hamper_2.jpg"
        ],
        "short_description": "Lightweight, foldable laundry hamper.",
        "big_description": "A durable and lightweight laundry hamper with a foldable design, making it easy to store when not in use. Features a sturdy frame, breathable mesh fabric, and reinforced handles for convenient carrying. Perfect for laundry rooms or dorms.",
        "price": 16.99,
        "dimensions": "50cm x 40cm x 60cm",
        "material": "Mesh Fabric",
        "color": "Navy Blue",
        "stock": 120,
        "weight": "900g",
        "tags": ["laundry", "foldable", "lightweight", "portable"]
    },
    {
        "id": 12,
        "name": "Cable Management Box",
        "category": "Tech Organization",
        "images": [
            "Photos/cable_box_1.jpg",
            "Photos/cable_box_2.jpg"
        ],
        "short_description": "Sleek cable management box for desks.",
        "big_description": "Keep your workspace tidy with this sleek cable management box. Designed to conceal power strips and cables, it features ventilation holes to prevent overheating and a modern design that blends well with any decor.",
        "price": 22.99,
        "dimensions": "40cm x 15cm x 12cm",
        "material": "Plastic",
        "color": "Black",
        "stock": 80,
        "weight": "1.2kg",
        "tags": ["tech", "cable management", "modern", "ventilated"]
    },
    {
        "id": 13,
        "name": "Bamboo Utensil Drawer Organizer",
        "category": "Kitchen Organization",
        "images": [
            "Photos/utensil_organizer_1.jpg",
            "Photos/utensil_organizer_2.jpg"
        ],
        "short_description": "Adjustable bamboo organizer for utensils.",
        "big_description": "A premium bamboo utensil organizer with adjustable compartments. Perfect for arranging cutlery, tools, or gadgets in your kitchen drawer. Made of eco-friendly bamboo with a smooth finish, it adds a natural touch to your kitchen.",
        "price": 34.99,
        "dimensions": "35cm x 45cm (adjustable)",
        "material": "Bamboo",
        "color": "Natural Wood",
        "stock": 50,
        "weight": "1.8kg",
        "tags": ["kitchen", "bamboo", "adjustable", "eco-friendly"]
    },
    {
        "id": 14,
        "name": "Over-the-Door Towel Rack",
        "category": "Bathroom Organization",
        "images": [
            "Photos/towel_rack_1.jpg",
            "Photos/towel_rack_2.jpg"
        ],
        "short_description": "Space-saving towel rack for bathrooms.",
        "big_description": "An over-the-door towel rack with three adjustable bars, providing ample storage for towels, robes, or clothes. Easy to install and fits most standard doors, it's an ideal space-saving solution for small bathrooms.",
        "price": 18.99,
        "dimensions": "50cm x 15cm x 80cm",
        "material": "Stainless Steel",
        "color": "Silver",
        "stock": 100,
        "weight": "1.5kg",
        "tags": ["bathroom", "towel rack", "over-the-door", "space-saving"]
    },
    {
        "id": 15,
        "name": "Jewelry Storage Box",
        "category": "Accessories Organization",
        "images": [
            "Photos/jewelry_box_1.jpg",
            "Photos/jewelry_box_2.jpg"
        ],
        "short_description": "Elegant jewelry organizer box.",
        "big_description": "A sophisticated jewelry storage box with multiple layers and compartments for rings, necklaces, earrings, and bracelets. Features a velvet-lined interior to protect your valuables and a locking mechanism for added security.",
        "price": 49.99,
        "dimensions": "25cm x 20cm x 15cm",
        "material": "MDF, Velvet",
        "color": "White",
        "stock": 40,
        "weight": "2.5kg",
        "tags": ["jewelry", "storage box", "elegant", "secure"]
    },
    {
        "id": 16,
        "name": "Rotating Makeup Carousel",
        "category": "Makeup Organization",
        "images": [
            "Photos/makeup_carousel_1.jpg",
            "Photos/makeup_carousel_2.jpg"
        ],
        "short_description": "360-degree rotating makeup organizer.",
        "big_description": "This rotating makeup organizer provides 360-degree access to all your beauty products. With adjustable shelves and a stylish design, it can hold a wide variety of items, from skincare bottles to lipsticks.",
        "price": 39.99,
        "dimensions": "30cm x 30cm x 40cm",
        "material": "Acrylic",
        "color": "Transparent",
        "stock": 60,
        "weight": "2kg",
        "tags": ["makeup", "rotating", "adjustable", "360-degree"]
    },
    {
        "id": 17,
        "name": "Collapsible Storage Ottoman",
        "category": "Living Room Organization",
        "images": [
            "Photos/storage_ottoman_1.jpg",
            "Photos/storage_ottoman_2.jpg"
        ],
        "short_description": "Stylish storage ottoman with cushion top.",
        "big_description": "A multifunctional storage ottoman that doubles as a seat. Features a removable cushion top and a spacious interior for storing blankets, toys, or magazines. Collapsible design makes it easy to store when not in use.",
        "price": 44.99,
        "dimensions": "40cm x 40cm x 40cm",
        "material": "Fabric, MDF",
        "color": "Gray",
        "stock": 45,
        "weight": "4kg",
        "tags": ["living room", "ottoman", "storage", "multi-functional"]
    },
    {
        "id": 18,
        "name": "Expandable Dish Rack",
        "category": "Kitchen Organization",
        "images": [
            "Photos/dish_rack_1.jpg",
            "Photos/dish_rack_2.jpg"
        ],
        "short_description": "Expandable dish rack for kitchens.",
        "big_description": "An expandable dish rack made from rust-resistant stainless steel. Features a drip tray and adjustable compartments to hold plates, bowls, and cutlery. Perfect for both small and large kitchens.",
        "price": 29.99,
        "dimensions": "35cm x 30cm (expandable to 55cm)",
        "material": "Stainless Steel",
        "color": "Silver",
        "stock": 70,
        "weight": "3kg",
        "tags": ["kitchen", "dish rack", "expandable", "rust-resistant"]
    },
    {
        "id": 19,
        "name": "Hanging Closet Organizer",
        "category": "Bedroom Organization",
        "images": [
            "Photos/closet_organizer_1.jpg",
            "Photos/closet_organizer_2.jpg"
        ],
        "short_description": "6-shelf hanging closet organizer.",
        "big_description": "A fabric hanging closet organizer with six shelves to store clothes, shoes, or accessories. Attaches securely to closet rods with Velcro straps. The lightweight and collapsible design makes it easy to install and remove.",
        "price": 24.99,
        "dimensions": "120cm x 30cm x 30cm",
        "material": "Fabric",
        "color": "Beige",
        "stock": 90,
        "weight": "1.5kg",
        "tags": ["bedroom", "closet", "hanging", "storage"]
    },
    {
        "id": 20,
        "name": "Magnetic Fridge Organizer",
        "category": "Kitchen Organization",
        "images": [
            "Photos/fridge_organizer_1.jpg",
            "Photos/fridge_organizer_2.jpg"
        ],
        "short_description": "Magnetic shelf for refrigerators.",
        "big_description": "A magnetic fridge organizer with multiple compartments for spices, towels, or utensils. Sticks securely to the fridge surface and is made of sturdy, rust-resistant material. A perfect space-saver for small kitchens.",
        "price": 19.99,
        "dimensions": "30cm x 20cm x 10cm",
        "material": "Metal",
        "color": "White",
        "stock": 80,
        "weight": "1kg",
        "tags": ["kitchen", "fridge", "magnetic", "space-saver"]
    }
]
export default products