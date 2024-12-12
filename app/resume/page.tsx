"use client";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Calendar, Code2, GraduationCap, User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const tabMenu = [
  { title: "Experiencia", value: "experience", icon: Briefcase },
  { title: "Educación", value: "education", icon: GraduationCap },
  { title: "Trabajos", value: "skills", icon: Code2 },
  { title: "Sobre mí", value: "about", icon: User },
];
const tabContent = {
  experience: {
    title: "Experiencia Profesional",
    items: [
      {
        role: "Abastible S.A",
        company: "Prevencionista.",
        period: "2021 - Presente",
        description: "bla bla bla.",
        highlights: ["Epp", "covid-19"],
      },
      {
        role: "Distribuidores abastible",
        company: "Prevencionista",
        period: "2022 - Presente",
        description: "mas bla bla.",
        highlights: ["Seguridad", "Covid-19"],
      },
    ],
  },
  education: {
    title: "CFT POR AHI",
    items: [
      {
        degree: "Prevencion",
        institution: "",
        period: "2018 - 2020",
        description: "bla bla",
        achievements: ["EPP", "RESPEL", "SUSPEL"],
      },
      // {
      //   degree: "Bachelor of Computer Science",
      //   institution: "State University",
      //   period: "2012 - 2016",
      //   description:
      //     "Foundation in computer science principles, data structures, and algorithms.",
      //   achievements: ["Academic Excellence Award", "Programming Club Lead"],
      // },
    ],
  },
  skills: {
    title: "Proyectos",
    categories: [
      {
        name: "Prevención de riesgos laborales",
        description:
          "a prevención de riesgos laborales es un pilar fundamental para garantizar la seguridad y el bienestar de los trabajadores en cualquier organización.",
        skills: [
          "Covid-19",
          // "Next.js",
          // "TypeScript",
          // "Tailwind CSS",
          // "Framer Motion",
        ],
      },
      // {
      //   name: "Backend Development",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
      //   skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      // },
      // {
      //   name: "Tools & Others",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
      //   skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
      // },
    ],
  },
  about: {
    title: "Sobre mí",
    bio: "Somos un Servicio de Prevención de Riesgos Laborales externo, independiente, creado y dedicado exclusivamente para apoyar a las empresas en esta materia, y que no tiene intereses en otros sectores económicos..",
    interests: [
      "Prevención de riesgos laborales",
      "Seguridad en el trabajo",
      "Salud ocupacional",
      "Gestión de riesgos laborales",
    ],
    languages: ["English (Intermediate)", "German (Basic)"],
  },
};
const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-[400px]">
            <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.experience.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.experience?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item?.role}</h3>
                        <p className=" text-muted-foreground">
                          {item?.company}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.education.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.education?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {item?.degree}
                        </h3>
                        <p className=" text-muted-foreground">
                          {item?.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.skills.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.skills?.categories.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{item?.name}</h3>
                        <p className=" text-muted-foreground">
                          {item?.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.about.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.experience?.items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <p className="text-white/90 mb-6 text-lg">
                      {tabContent.about.bio}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Interests
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tabContent.about.interests.map((interest, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tabContent.about.languages.map((language, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                            >
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
