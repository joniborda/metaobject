import { getMetaobject } from "@outsmartly/metaobjects";

const METAOBJECT = "mattress_technology";

export const run = async () => {
  const metaobject = await getMetaobject(METAOBJECT);

  if (!metaobject) {
    throw new Error(`Metaobject ${METAOBJECT} not found`);
  }

  const data = Object.values(metaobject[METAOBJECT]);

  console.log(data[0]);
};

await run();
