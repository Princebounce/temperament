# Temperament Quiz 🎭

An interactive personality quiz that determines your dominant temperament type based on the four classical temperaments: Sanguine, Choleric, Melancholic, and Phlegmatic.

## Features

- **8 thoughtfully crafted questions** covering various life scenarios
- **Beautiful, responsive UI** with gradient backgrounds and smooth animations
- **Real-time progress tracking** with visual progress bar
- **Detailed results page** showing:
  - Your dominant temperament type
  - Personality description
  - Key strengths
  - Areas for growth
  - Score breakdown with visual charts
- **Navigate back through questions** to review/change answers
- **Mobile-friendly design** that works on all devices

## Tech Stack

- **React** with TypeScript
- **Next.js 16** (App Router)
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd temperament-quiz
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
temperament-quiz/
├── app/
│   └── page.tsx          # Main quiz component
├── public/
├── README.md
└── package.json
```

## The Four Temperaments

### 🟡 Sanguine - The Social Butterfly
Outgoing, enthusiastic, and loves being around people. Optimistic and spontaneous.

### 🔴 Choleric - The Natural Leader
Goal-oriented, confident, and decisive. Born to lead and get things done efficiently.

### 🔵 Melancholic - The Thoughtful Perfectionist
Analytical, detail-oriented, and deep thinker. Thoughtful, loyal, and strives for perfection.

### 🟢 Phlegmatic - The Peaceful Peacemaker
Calm, easy-going, and excellent mediator. Patient, reliable, and brings peace to others.

## Customization

### Adding Questions

Add new questions to the `questions` array:

```typescript
{
  q: "Your question here?",
  options: [
    { text: "Sanguine answer", type: "sanguine" as TemperamentType },
    { text: "Choleric answer", type: "choleric" as TemperamentType },
    { text: "Melancholic answer", type: "melancholic" as TemperamentType },
    { text: "Phlegmatic answer", type: "phlegmatic" as TemperamentType }
  ]
}
```

### Styling

The quiz uses Tailwind CSS. Modify colors and styles by updating className values or extend your `tailwind.config.js`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build for production:
```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

- Based on the classical four temperaments theory
- UI inspired by modern personality quiz designs
- Icons by [Lucide](https://lucide.dev)

## Future Improvements

- [ ] Add animation transitions between questions
- [ ] Save results to localStorage
- [ ] Add social sharing buttons
- [ ] Show detailed compatibility between types
- [ ] Add multiple language support
- [ ] Include email results feature
- [ ] Add dark mode toggle

## Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ❤️ using React and Next.js
