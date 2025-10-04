import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import profileImage from "@/assets/me and I .png";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-elegant"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-playfair font-bold">
              {personalInfo.name}
            </h3>
            <p className="text-xl text-primary font-semibold">
              {personalInfo.title}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-primary font-semibold min-w-[100px]">Email:</span>
                <span className="text-muted-foreground">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary font-semibold min-w-[100px]">Téléphone:</span>
                <span className="text-muted-foreground">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary font-semibold min-w-[100px]">Localisation:</span>
                <span className="text-muted-foreground">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
