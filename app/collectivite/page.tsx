"use client";
//import { ClientComponent } from "#/ui/ClientComponent";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import Image from "next/image";
import { Summary } from "@codegouvfr/react-dsfr/Summary";
import { fr } from "@codegouvfr/react-dsfr";
import { useRouter } from 'next/navigation' ;
import { useSearchParams } from 'next/navigation';
import { KPICard } from '../components/KPICard';

export default function Collectivite() {
    const searchParams = useSearchParams()
    // console.log(searchParams.get('code')) // Logs "search"

    return(
                <>
                    <div
                        style={{
                            backgroundColor : fr.colors.decisions.background.alt.blueFrance.default,
                            
                        }}
                    >
                        <div
                            style={{
                                paddingTop: fr.spacing("32v"),
                                paddingBottom: fr.spacing("6v"),
                                paddingLeft: fr.spacing('30v'),
                                width:'690px'
                            }}
                        >
                            <h1> YO au diagostic santé evironnement de votre collectivité</h1>
                            <KPICard codeCommune={searchParams.get('code')}/>
                        </div>
        
                    </div>
                </>
            )
  }
  

// export default function Collectivite() {

//     const router = useRouter();
//     const result = router.query;
//     console.log(result)

//     return(
//         <>
//             <div
//                 style={{
//                     backgroundColor : fr.colors.decisions.background.alt.blueFrance.default,
                    
//                 }}
//             >
//                 <div
//                     style={{
//                         paddingTop: fr.spacing("32v"),
//                         paddingBottom: fr.spacing("6v"),
//                         paddingLeft: fr.spacing('30v'),
//                         width:'690px'
//                     }}
//                 >
//                     <h1> {result} au diagostic santé evironnement de votre collectivité</h1>
//                 </div>

//             </div>
//         </>
//     )

// }