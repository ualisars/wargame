export let formation:any = {};

export const changeFormation = (newFormation:any) => {
  formation = newFormation;
  console.error('formation:', formation);
}
