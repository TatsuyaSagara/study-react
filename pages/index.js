import { Footer } from "../components/footer.js";
import { Tab } from "@/components/tab.js";
import { Main } from "@/components/main.js";

export default function Home() {
  return (
    <>
      <Tab page="index" />
      <Main page="index" />
      <Footer />
    </>
  );
}
