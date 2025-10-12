# Culichi iOS Calculator 🧮

![Demo](calculator.gif)

> A sophisticated iOS-inspired web calculator application with multiple calculation modes and advanced features.

## ✨ Features

### 🔢 **Three Calculation Modes**
- **Basic Mode**: Standard arithmetic operations for everyday calculations
- **Scientific Mode**: Advanced mathematical functions for complex calculations  
- **Conversion Mode**: Unit conversions for practical applications

### 🧮 **Basic Operations**
- ➕ **Addition, Subtraction, Multiplication, Division** - All standard arithmetic operations
- 🔢 **Decimal Point Support** - Handles floating-point numbers with precision
- ➕➖ **Toggle Plus/Minus** - Quickly switch between positive and negative numbers
- 📊 **Percentage Calculations** - Convert numbers to percentages instantly
- ↩️ **Backspace Function** - Delete individual digits for easy correction

### 🔬 **Scientific Functions**
- 📐 **Trigonometric Functions**: `sin`, `cos`, `tan` (input in degrees)
- 📈 **Logarithmic Functions**: `log` (base 10), `ln` (natural logarithm)
- √ **Root Functions**: Square root (`√`) and power functions (`x²`)
- 🔢 **Mathematical Constants**: π (Pi) and e (Euler's number)

### 🔄 **Unit Conversions**
- 🌡️ **Temperature**: Celsius to Fahrenheit (`°C→°F`)
- 📏 **Distance**: Kilometers to Miles (`km→mi`), Meters to Feet (`m→ft`)
- ⚖️ **Weight**: Kilograms to Pounds (`kg→lb`)

### 💾 **History and Memory**
- 📋 **Calculation History** - Automatic storage of all calculations
- ✏️ **Edit Previous Calculations** - Reload last calculation for editing
- 🗑️ **Clear History** - Remove all stored calculations with confirmation
- 📅 **Time Filtering** - View calculations from last 7 or 30 days

### ⌨️ **Keyboard Support**
Full keyboard navigation and input support:
- **Numbers**: `0-9` for digit entry
- **Operations**: `+`, `-`, `*`, `/` for mathematical operations
- **Functions**: `Enter` or `=` for equals, `Escape` to clear, `Backspace` to delete
- **Special**: `.` for decimal point, `%` for percentage

### 🎨 **Modern UI/UX**
- 📱 **iOS-Inspired Design** - Familiar calculator interface with modern aesthetics
- 🌑 **Dark Theme** - Easy on the eyes with high contrast for visibility
- 🟠 **Orange Accent Colors** - Distinctive operator buttons following iOS design
- ↗️ **Smooth Animations** - Fluid transitions and responsive feedback
- 📲 **Responsive Design** - Adapts to different screen sizes and devices
- ♿ **Accessibility** - Proper ARIA labels and keyboard navigation

## 🚀 Quick Start

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ByCulichi/Calculator-Culichi.git
   cd Calculator-Culichi
   ```

2. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - Or use a local server for optimal performance:
   ```bash
   # Using Python
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

### Usage

1. **Basic Calculations**: Use the numeric keypad and operator buttons for standard math
2. **Mode Switching**: Tap the mode selector at the bottom to switch between Basic, Scientific, and Conversion modes
3. **History Access**: Click the hamburger menu (☰) at the top left to view calculation history
4. **Keyboard Input**: Use your physical keyboard for faster entry
5. **Unit Conversion**: Switch to Conversion mode and enter a value, then tap the conversion button

## 🎯 Keyboard Shortcuts

| Key | Function |
|-------|---------|
| `0-9` | Numeric input |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `=` or `Enter` | Calculate result |
| `Escape` | Clear (AC) |
| `Backspace` | Delete last digit |
| `.` | Decimal point |
| `%` | Percentage |

## 🛠️ Technical Specifications

### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styles with custom properties (CSS variables), Grid layout and animations
- **Vanilla JavaScript**: Pure JavaScript (ES6+) with no external dependencies

### Browser Compatibility
- ✅ **Chrome/Edge**: 88+ (Full support)
- ✅ **Firefox**: 78+ (Full support) 
- ✅ **Safari**: 14+ (Full support)
- ✅ **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+

### Performance Features
- 🚀 **Zero Dependencies** - No external libraries, loads instantly
- 💾 **Local Storage** - History persisted in browser storage
- ⚡ **Lightweight** - Total size < 50KB for all assets
- 📱 **PWA Ready** - Can be installed as mobile app

## 📁 Project Structure

```
Calculator-Culichi/
├── index.html          # Main HTML structure with complete comments
├── style.css           # Complete styles with CSS variables and responsive design
├── script.js           # Calculator logic with detailed JSDoc documentation  
├── iconoCalaculadora.jpg # Calculator icon for branding
├── Animation.gif       # Animation demo for README
└── README.md          # This documentation file
```

## 🔧 Code Architecture

### JavaScript Modules
- **Global State Management**: `buffer`, `runningTotal`, `previousOperator`, `calculatorHistory`
- **Core Functions**: Calculation logic, screen updates, operation handling
- **UI Controllers**: Sidebar management, mode switching, history operations
- **Event Handlers**: Button clicks, keyboard input, splash screen management
- **Utility Functions**: Message display, validation, format conversion

### CSS Organization  
- **CSS Custom Properties**: Centralized theme and color management
- **Component Styles**: Modular styles for calculator, sidebar, buttons
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Animations**: Smooth transitions and hover effects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 🐛 Reporting Issues
If you find a bug or have a suggestion:
1. Check if a similar issue already exists
2. Create a new issue with detailed description
3. Include steps to reproduce the problem
4. Add screenshots if relevant

### 💡 Requesting Features
To propose new features:
1. Explain the use case
2. Describe the proposed functionality
3. Consider the impact on user experience

## 📊 Detailed Features

### Scientific Mode
- **Trigonometric Functions**: Precise calculations of sine, cosine, and tangent
- **Logarithms**: Base 10 and natural logarithm with high precision
- **Powers and Roots**: Calculation of squares and square roots
- **Constants**: Precise values of π and e for advanced calculations

### History System
- **Persistence**: Calculations are automatically saved in localStorage
- **Time Filters**: View calculations by specific periods
- **Editing**: Reuse previous calculations for new operations
- **Management**: Selective or complete history clearing

### Unit Conversions
- **Temperature**: Precise °C to °F conversion with standard formula
- **Distance**: Metric/Imperial conversions (km↔mi, m↔ft)  
- **Weight**: kg↔lb conversion with exact conversion factors
- **Intuitive Interface**: Dedicated buttons with informative messages

## 🔍 Implementation Details

### State Management
```javascript
// Global variables for calculator state
let buffer = "0";           // Current number on screen
let runningTotal = 0;       // Accumulated total
let previousOperator = null; // Last operator used
let calculatorHistory = []; // Operation history
```

### Core Functions
- **`handleSymbol()`**: Central input processor
- **`updateScreen()`**: Interface update
- **`processOperator()`**: Mathematical operation handling
- **`toggleSidebar()`**: History menu control

### Events and Interactivity
- Full physical keyboard support
- Touch gestures for mobile devices
- Visual feedback on interactions
- Real-time input validation

## 📱 Mobile-First Features

### Responsive Design
- **Breakpoints**: Optimized for mobile, tablet and desktop
- **Touch Targets**: Buttons with minimum size of 44px
- **Orientation**: Support for portrait and landscape
- **Viewport**: Optimal configuration for mobile devices

### Mobile Performance
- **Fast Loading**: Optimized for slow connections
- **Efficient Memory**: Careful resource management
- **Battery**: Minimizes CPU usage with efficient animations

## 🎨 Visual Style Guide

### Color Palette
- **Background**: `#000000` (Pure black for maximum contrast)
- **Number Buttons**: `#333333` (Dark gray)
- **Function Buttons**: `#A6A6A6` (Light gray) 
- **Operator Buttons**: `#FF9500` (iOS Orange)
- **Text**: `#FFFFFF` (White for legibility)

### Typography
- **Main Font**: SF Pro Display (iOS system)
- **Fallbacks**: -apple-system, BlinkMacSystemFont, sans-serif
- **Sizes**: Responsively scaled
- **Weight**: Regular for numbers, Medium for operators

## 🧪 Testing and Quality

### Test Cases
- ✅ Basic operations (addition, subtraction, multiplication, division)
- ✅ Scientific functions with known values
- ✅ Unit conversions with standard factors
- ✅ History management (save, load, clear)
- ✅ Complete keyboard navigation
- ✅ Cross-browser compatibility

### Code Standards
- **JSDoc**: Complete function documentation
- **Comments**: Explanations in Spanish for clarity
- **Conventions**: Descriptive names and modular structure
- **Accessibility**: ARIA labels and keyboard navigation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Christian (ByCulichi)**
- GitHub: [@ByCulichi](https://github.com/ByCulichi)
- Project: [Calculator-Culichi](https://github.com/ByCulichi/Calculator-Culichi)

## 🙏 Acknowledgments

- Inspired by iOS calculator design
- Developed with love for the Spanish-speaking community
- Thanks to all contributors and users who report issues

---

*Built with ❤️ and modern web technologies*

### 📞 Contact and Support

Have questions or need help? 
- 🐛 [Report a bug](https://github.com/ByCulichi/Calculator-Culichi/issues)
- 💡 [Request a feature](https://github.com/ByCulichi/Calculator-Culichi/issues)
- 📧 Contact the author through GitHub

**Your feedback is valuable for improving the app! 🚀**
