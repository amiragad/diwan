const { stitch, StitchError } = require("@google/stitch-sdk");

async function main() {
  const projectId = "2256533212898016551";
  const screenId = "a71d6ad9e59948c194e41c054bb2ff7c";
  const dsId = "715f065349d44c309d9068b6ee6828df";
  try {
    const project = stitch.project(projectId);
    console.log("listing screens...");
    const screens = await project.screens();
    console.log("screens count", screens.length);
    for (const s of screens) console.log("screen", s.id);
    console.log("get homepage...");
    const home = await project.getScreen(screenId);
    const htmlUrl = await home.getHtml();
    const imageUrl = await home.getImage();
    console.log("HTML_URL", htmlUrl);
    console.log("IMAGE_URL", imageUrl);
    console.log("list design systems...");
    const systems = await project.listDesignSystems();
    console.log("ds count", systems.length);
    for (const d of systems) console.log("ds", d.id);
  } catch (e) {
    console.error("ERROR", e && e.code, e && e.message);
    if (e && e.stack) console.error(e.stack.split("\n").slice(0, 8).join("\n"));
  }
}
main();
