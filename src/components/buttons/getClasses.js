export const getClasses = (Classes) =>
    Classes 
        .filter((item)=> item !== '' )
        .join(" ")
        .trim();   //stringiin tsagaan zaig ni tootsohgui gevel ug utgiig avna
        