import "../styles/globals.css";

// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
// router
import { useRouter } from "next/router";

// farmer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      {/* Transition Overlay - separate from content */}
      {/* <AnimatePresence mode="wait">
        <Transition key={`transition-${router.route}`} />
      </AnimatePresence>   */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={router.route} className="h-full">
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
