import { Drawer, Tag } from "antd";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectDrawer({ project, onClose }) {
  return (
    <Drawer
      open={Boolean(project)}
      onClose={onClose}
      width={560}
      title={project?.title}
      className="project-drawer"
      styles={{ body: { padding: 0 } }}
    >
      {project && (
        <div className="drawer-content">
          {project.image && <img src={project.image} alt={`Tampilan ${project.title}`} />}
          <div className="drawer-copy">
            <p className="drawer-kicker">{project.type} · {project.year}</p>
            <p className="drawer-summary">{project.challenge}</p>
            <ul>
              {project.details.map((detail) => <li key={detail}><Check size={16} />{detail}</li>)}
            </ul>
            <div className="drawer-tags">
              {project.stack.map((item) => <Tag key={item}>{item}</Tag>)}
            </div>
            {project.href && (
              <Button asChild>
                <a href={project.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a>
              </Button>
            )}
          </div>
        </div>
      )}
    </Drawer>
  );
}
