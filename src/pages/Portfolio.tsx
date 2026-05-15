import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Play, ExternalLink, X } from "lucide-react";
import { BackgroundLines } from "../components/BackgroundLines";

const driveImageIds = [
<<<<<<< HEAD
  "1-d8h2M-BkcPIV1sO-p4MlLuXnnBSUOWJ",
=======
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
  "10ru8uD2RmNnhgT1biqhTxMlz6zcIF8S4",
  "114oqtfQp0zdeELK1E4fIfEh8VMSnUFgJ",
  "13e8b-zpDvO5xUhYFDGxYcMfhK7aF8M-H",
  "14jWywdjCeO31pYZe3-Hp1kQTvEzlJyQq",
  "16CgtaTEYS6qr2r11GmfCEMSJHkIRUh6B",
  "1ABn7443lwhmtUGFqJoQi1D57HhQNddDL",
  "1CoRrzobw56_fcKLOq6c7p2ktb5Nlphc4",
  "1Dv25_0gmCZQWwAQgI5CrWZ_3wnfa2oWP",
  "1FVos1Ug0Zvdcp8Sn6bRmDRjRIiJnlPHR",
<<<<<<< HEAD
  "1GxhCl3XGk3PnPo7uKKR8xdgABOn7_8zq",
=======
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
  "1H-lGz3AI0vqc7YzgTx2onGJL5rbmiZ3T",
  "1H39ZNEIpt3gUY1y38IDY4XEQOR_vxepo",
  "1H7sJnODbQZQEdsNA5qeyGPjqOYRDoG2t",
  "1KxdC9L_Tq9vBGF4gcxxyIaCoW-OkwSPT",
  "1N99ycbWTDLpJBEB8SHAhuoC4BisBj5w-",
  "1Nz91O69BlAVRaRoWTD3uIszIvvXxny00",
  "1QthV_624IBx5ltwtki34EFyp1rA6OuqA",
  "1RzGgn3nb7S0tV0pelAD8te_sy4i_Uvg6",
  "1SCeZLJa5_c8zrSyOYLbeshcb5tVWOEdv",
  "1SFXM4FTfewakC1dpg7Tk5xZ7kC9gq9LE",
  "1VVj81RqXbxXs2SmHVakJSYWEbT43XKnn",
  "1W9vT0B_xClZhDFl5upOnMpU4vcHHuaBh",
  "1WhWAVuS-N_oNjKh9vhH6jYdXcpNO-KtC",
  "1_poInjnJCsJYm4NZKRJ9Pb5i4WxHv8qd",
  "1ab_YvbwCIrPH6UYseQgEnfMByWyi1QYn",
  "1aw4OXir15dtRsd84bLACYpyxxJxkhJTC",
  "1fmNydq4o0MEWaRsxCXqcxli4m-hS4nBn",
  "1fv9v5AQyUUFcS54e5__ETR9M4a4kArvd",
  "1gfqBRnP7QPXMgNQLz4vQCQ9K-uK0bA6i",
  "1gwr23j4oRG4MHWJmxJv0mhG1HWPYgT8G",
  "1iwEn64yRyRB12OjxCG43Z1ILnEiaC8Wp",
  "1jdeaeltygXbp1AWGmZZOaCT5HkbGRbOm",
  "1kRHaZa-PguxSEdYvVdDOwWArUwJnhymr",
  "1l2fw59yXZw1pjjC2H1TOK6GOXBDQNMbD",
  "1nAMDUt8EnVedGvs6y5nF_BeiAlxyQr7k",
  "1nDavPqQ4GbXwXmaIq3VsvnnARQOdtBAk",
  "1o5F2-yvi3P7ycw2MgaXA5vok_SjPyKjm",
  "1tdwKNpyvdNz4MZUuGQAZWuIk1vC_kHi4",
  "1ujulKMcj7dsg0Dit6_WeV1QRUBTyx3SE",
  "1usgagu-1B52kBBaDlppYOCYTxM4FG41D",
  "1wohBE0dGV361IqJXkMAd2BPPPrSlXG3S",
  "1wu6Air8UWyMXrwQZCcPC53aI3EH2be6e",
  "1zNjkxVeV3ETTjsv6VXN7iD70Be7Om-8V",
  "1zVAGCrkn0_EAoY5J_V8bVqJuhPxO3yvr"
];

<<<<<<< HEAD
const projects = driveImageIds.map((id, index) => ({
  id: index + 1,
  image: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
  fullImage: `https://drive.google.com/thumbnail?id=${id}&sz=w4000`,
}));

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
=======
const youtubeShortsIds = [
  "huYdRNIXS7M",
  "g8Dl2N-MO-Q",
  "t2I-lBnm8Es",
  "PjsV-RPugWo",
  "9tMFQPLs7l0",
  "RPsEScPwNiw"
];

interface PortfolioItem {
  id: string;
  type: "image" | "video";
  thumbnail: string;
  content: string; // Image URL or Video ID
}

const items: PortfolioItem[] = [
  ...youtubeShortsIds.map((id) => ({
    id: `video-${id}`,
    type: "video" as const,
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    content: id,
  })),
  ...driveImageIds.map((id) => ({
    id: `image-${id}`,
    type: "image" as const,
    thumbnail: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
    content: `https://drive.google.com/thumbnail?id=${id}&sz=w4000`,
  })),
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      <section className="py-32 px-6 relative overflow-hidden">
        <BackgroundLines />
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter"
            >
              Our <span className="text-gradient">Portfolio</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/50"
            >
<<<<<<< HEAD
              A clean gallery showcase of our selected works.
=======
              A clean gallery showcase of our selected works and social media campaigns.
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
            </motion.p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {projects.map((project) => (
              <motion.div
                key={project.id}
=======
            {items.map((item) => (
              <motion.div
                key={item.id}
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
<<<<<<< HEAD
                onClick={() => setSelectedImage(project.fullImage)}
=======
                onClick={() => setSelectedItem(item)}
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
                className="group relative cursor-pointer glass rounded-[2.5rem] overflow-hidden"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
<<<<<<< HEAD
                    src={project.image} 
                    alt="Portfolio Work" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform delay-100">
                        <ArrowUpRight size={32} />
                     </div>
                  </div>
=======
                    src={item.thumbnail} 
                    alt="Portfolio Work" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform delay-100">
                        {item.type === "video" ? <Play size={32} fill="currentColor" /> : <ArrowUpRight size={32} />}
                     </div>
                  </div>
                  {item.type === "video" && (
                    <div className="absolute bottom-6 left-6 px-4 py-1 rounded-full bg-brand-primary text-black text-xs font-bold flex items-center gap-1">
                      <Play size={12} fill="currentColor" />
                      VIDEO
                    </div>
                  )}
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
<<<<<<< HEAD
        {selectedImage && (
=======
        {selectedItem && (
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
<<<<<<< HEAD
            onClick={() => setSelectedImage(null)}
=======
            onClick={() => setSelectedItem(null)}
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white hover:text-brand-primary transition-colors z-10"
<<<<<<< HEAD
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Full Screen View"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
=======
              onClick={() => setSelectedItem(null)}
            >
              <X size={48} />
            </motion.button>
            
            <div className="w-full max-w-5xl h-full flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-full h-full flex items-center justify-center p-4 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === "image" ? (
                  <img
                    src={selectedItem.content}
                    alt="Full Screen View"
                    className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
                  />
                ) : (
                  <div className="w-full max-w-[400px] aspect-[9/16] relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedItem.content}?autoplay=1`}
                      title="YouTube video player"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </motion.div>
            </div>
>>>>>>> de3831e (Update from AI Studio - Fri 05/15/2026 11:33:45.90)
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
