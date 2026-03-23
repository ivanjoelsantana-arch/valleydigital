import { Link } from "react-router-dom";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";
...
          <Link
            to="/discovery"
            className="btn-primary-glow btn-hover-lift text-base md:text-lg px-10 py-4 inline-block"
          >
            Start Your Build
          </Link>
        </BlueprintReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
