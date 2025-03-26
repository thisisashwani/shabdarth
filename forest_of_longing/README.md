# Shabdarth: Forest of Longing

A poetic language-revival game focused on rediscovering forgotten Hindi/Urdu words through interactive dream worlds.

## Design and Technical Considerations

## Visual Assets

For a complete implementation, you would need these assets:

1. **Background Images:**
   - Forest gate (landing page)
   - Moonlit forest path (Scene 1)
   - Floating swing (Scene 2)
   - Open glade with petals (Scene 3)
   - Tree with flowing vines (Scene 4)
   - Glowing chalice (Scene 5)

2. **Audio Files:**
   - Background music (instrumental loop from the song)
   - Narration recordings for each scene
   - Word sound clips

3. **Relics:**
   - Love letter visual (for Bekhudi)
   - Petals forming a line (for Fizaayein)
   - Scarf tied to branch (for Zulfon)
   - Poem fragment (for May-kashi)

For placeholder assets, you could:
- Use AI image generation (like Midjourney or DALL-E) with prompts based on the scene descriptions
- Record temporary narrations until professional voice acting is available
- Use creative commons music for the prototype stage

## Animation Enhancements

The prototype includes basic animations, but for a more immersive experience, consider:

1. **Three.js particle systems** for the floating mist and poetry fragments
2. **Custom shader effects** for the glowing chalice and moonlight
3. **Spring-based animations** for the swing's movement
4. **Wind simulation** for the Fizaayein scene's petals and Zulfon's vines

## Deployment Instructions

To deploy this prototype:

1. **Development Setup:**
   ```bash
   git clone <your-repo>/shabdarth-forest-of-longing
   cd shabdarth-forest-of-longing
   npm install
   npm start
   ```

2. **Production Build and Deployment:**
   - For Netlify:
     ```bash
     npm run deploy
     ```
   - For GitHub Pages:
     Add `"homepage": "https://<username>.github.io/shabdarth-forest-of-longing"` to package.json

3. **Mobile Export (Optional):**
   - Consider using Capacitor.js to wrap the web app for mobile:
     ```bash
     npm install @capacitor/core @capacitor/cli
     npx cap init Shabdarth com.yourcompany.shabdarth
     npm run build
     npx cap add android  # or ios
     ```

## Expansion Framework

The code structure is designed to make adding new dream worlds straightforward:

1. **World Selection Screen:**
   - Add a new component `WorldSelection.js` that lists available worlds
   - Modify `GameContext.js` to track the current world

2. **Data Organization:**
   - Create a new folder in `src/data/` for each world
   - Abstract word data and narrations into world-specific files

3. **New Word Types:**
   - The `WordCard` component is designed to be reusable across different word types
   - Extend the data model with new word properties as needed

## Emotional Design Notes

This prototype prioritizes emotional connection by:

1. **Soft transitions** between scenes to feel like drifting through memories
2. **Audio narration** as the primary guide, creating intimacy
3. **Interactive moments** that feel like discoveries rather than tasks
4. **Visual metaphors** that connect directly to the words' meanings
5. **Reward system** focused on collection rather than achievement

## Conclusion

The "Forest of Longing" prototype creates a poetic journey through forgotten Hindi/Urdu words, combining interactive storytelling with language preservation. The implementation focuses on creating an emotionally resonant experience while maintaining technical flexibility for future expansion.

The prototype demonstrates:
- A cohesive, mystical visual language
- Thoughtful audio integration
- Meaningful interactions tied to word meanings
- A reward system based on collection and memory
- A scalable architecture for adding more dream worlds

## Project Structure

```
shabdarth-forest-of-longing/
├── public/
│   ├── assets/
│   │   ├── audio/           # Background music, narrations, word sounds
│   │   ├── images/          # Scene backgrounds and relic visuals
│   │   └── fonts/           # Devanagari and English fonts
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
│   ├── components/          # UI components for scenes and interactions
│   ├── contexts/            # Game state and audio management
│   ├── data/                # Word definitions and narration texts
│   ├── hooks/               # Custom hooks for audio and progress
│   ├── utils/               # Animation and storage utilities
│   └── styles/              # Global and component-specific styles
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **React** - Component-based UI development
- **Three.js** - 3D visuals and animations
- **Howler.js** - Audio management
- **Framer Motion** - Animation library
- **Local Storage** - Game progress persistence
